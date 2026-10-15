/* Backend tests: ALL network calls below are clearly labeled mocks; no live mail. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn, spawnSync } = require('node:child_process');
const ts = require('typescript');
const { test, after } = require('node:test');
const root = path.resolve(__dirname, '..');
require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8').replaceAll('"@/', '"' + root + '/');
  module._compile(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, filename);
};
const aggregate = require('../lib/lead-analytics-server.ts');
if (process.argv[2] === '--worker') {
  Promise.all(Array.from({ length: 25 }, () => aggregate.recordLeadEvent('page_view', '/', 'hero'))).catch((error) => { console.error(error.message); process.exitCode = 1; });
} else {
  const scratch = process.env.TMPDIR || os.tmpdir();
  const dir = fs.mkdtempSync(path.join(scratch, 'enkay-backend-test-'));
  process.env.LEAD_ANALYTICS_DIR = dir;
  process.env.RESEND_API_KEY = 'MOCK_ONLY_NOT_A_REAL_KEY';
  process.env.ENKAY_DIAGNOSTICS_TOKEN = 'MOCK_ONLY_DIAGNOSTIC_TOKEN';
  delete process.env.DEEPSEEK_API_KEY;
  const analytics = require('../app/api/analytics/route.ts');
  const contact = require('../app/api/contact/route.ts');
  const day = new Date().toISOString().slice(0, 10);
  const read = () => JSON.parse(fs.readFileSync(path.join(process.env.LEAD_ANALYTICS_DIR, day + '.json'), 'utf8'));
  const request = (body, headers = {}, route = 'analytics') => new Request('https://enkay.dev/api/' + route, { method: 'POST', headers: { origin: 'https://enkay.dev', 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
  const valid = { name: 'MOCK <Tester> & "Name"', email: 'mock@example.invalid', message: 'MOCK <script>alert("x")</script> & test', pagePath: '/ux-audit', source: 'hero', website: '' };
  after(() => fs.rmSync(dir, { recursive: true, force: true }));

  test('aggregate concurrent workers, atomic readable files, restart durability, retention and report totals', async () => {
    fs.writeFileSync(path.join(dir, '2000-01-01.json'), '{}');
    const worker = () => new Promise((resolve, reject) => {
      const child = spawn(process.execPath, [__filename, '--worker'], { cwd: root, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
      let errors = ''; child.stderr.on('data', (v) => errors += v);
      child.on('error', reject); child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(errors)));
    });
    let sawRead = false;
    const watcher = setInterval(() => {
      if (fs.existsSync(path.join(dir, day + '.json'))) { JSON.parse(fs.readFileSync(path.join(dir, day + '.json'), 'utf8')); sawRead = true; }
    }, 2);
    try { await Promise.all([worker(), worker(), worker(), worker()]); } finally { clearInterval(watcher); }
    assert.equal(sawRead, true);
    assert.deepEqual(read().counts, [{ path: '/', event: 'page_view', placement: 'hero', count: 100 }]);
    await worker();
    assert.equal(read().counts[0].count, 125);
    assert.equal(fs.existsSync(path.join(dir, '2000-01-01.json')), false);
    assert.deepEqual(fs.readdirSync(dir), [day + '.json']);
    const result = spawnSync('python3', ['scripts/lead-report.py', '--data-dir', dir, '--days', '7', '--json'], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout);
    assert.equal(report.total.page_view, 125);
    assert.equal(report.daily.length, 7);
    assert.equal(report.by_path[0].events.page_view, 125);
    assert.match(report.notes.join(' '), /not unique/);
    console.log('VERIFIED mock aggregate: 4 workers × 25 + restarted worker × 25 = 125 persisted events');
  });
  test('analytics schema, public whitelist, origin, body limit, reserved server event, diagnostics privacy', async () => {
    assert.equal(aggregate.PUBLIC_LEAD_PATHS.size, 57);
    for (const payload of [
      { event: 'lead_received', path: '/' }, { event: 'page_view', path: '/?email=private@example.invalid' },
      { event: 'page_view', path: '/not-public' }, { event: 'page_view', path: '/', email: 'private@example.invalid' },
      { event: 'page_view', path: '/', placement: 'private' }, { event: 'page_view', path: '//evil.test' },
    ]) assert.equal((await analytics.POST(request(payload))).status, 400);
    assert.equal((await analytics.POST(request({ event: 'page_view', path: '/' }, { origin: 'https://evil.invalid' }))).status, 403);
    assert.equal((await analytics.POST(request({ event: 'page_view', path: '/', extra: 'x'.repeat(2000) }))).status, 413);
    const before = JSON.stringify(read());
    assert.equal((await analytics.POST(request({ event: 'page_view', path: '/' }, { 'x-enkay-diagnostics': process.env.ENKAY_DIAGNOSTICS_TOKEN }))).status, 204);
    assert.equal(JSON.stringify(read()), before);
    assert.equal((await analytics.POST(request({ event: 'email_click', path: '/saas-product-design', placement: 'email' }))).status, 204);
    const persisted = fs.readFileSync(path.join(dir, day + '.json'), 'utf8');
    assert.equal(/private|@|referrer|session|userAgent|ip_address/.test(persisted), false);
    assert.deepEqual(Object.keys(read()).sort(), ['counts', 'day', 'version']);
  });
  test('invalid/honeypot/unauthenticated diagnostic contacts never call network', async () => {
    global.fetch = async () => { throw new Error('UNEXPECTED NETWORK: mock guard'); };
    for (const body of [{ ...valid, name: {} }, { ...valid, email: 'bad' }, { ...valid, name: 'x\r\nBcc: someone' }, { ...valid, message: 'x'.repeat(6001) }]) assert.equal((await contact.POST(request(body, {}, 'contact'))).status, 400);
    for (const honeypot of ['company_website', 'website', 'honeypot', 'company_url']) assert.equal((await contact.POST(request({ ...valid, [honeypot]: 'spam' }, {}, 'contact'))).status, 200);
    assert.equal((await contact.POST(request(valid, { 'x-enkay-diagnostics': 'invalid' }, 'contact'))).status, 403);
    assert.equal((await contact.POST(request(valid, { 'x-enkay-diagnostics': process.env.ENKAY_DIAGNOSTICS_TOKEN }, 'contact'))).status, 400);
  });
  test('owner first, HTML escaped; AI + optional ack failure do not lose accepted lead; normal response has no IDs', async () => {
    process.env.DEEPSEEK_API_KEY = 'MOCK_ONLY_AI_KEY';
    const calls = [];
    global.fetch = async (url, options) => {
      calls.push({ url, body: JSON.parse(options.body) });
      if (calls.length === 1) return Response.json({ id: 'MOCK_OWNER_ACCEPTED' });
      throw new Error('MOCK timeout or failure');
    };
    const response = await contact.POST(request(valid, {}, 'contact'));
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(JSON.stringify(body).includes('MOCK_OWNER_ACCEPTED'), false);
    assert.equal(calls[0].url, 'https://api.resend.com/emails');
    assert.match(calls[0].body.html, /&lt;script&gt;/);
    assert.match(calls[0].body.html, /&amp;/);
    assert.equal(calls[0].body.html.includes('<script>'), false);
    assert.equal(calls[1].url.includes('deepseek'), true);
    assert.equal(calls.length, 3);
    assert.equal(read().counts.find((r) => r.event === 'lead_received').count, 1);
    delete process.env.DEEPSEEK_API_KEY;
  });
  test('owner failure means no ack and no lead; metric failure cannot drop accepted enquiry', async () => {
    const before = JSON.stringify(read()); let calls = 0;
    global.fetch = async () => { calls++; return Response.json({ error: 'MOCK rejection' }, { status: 500 }); };
    assert.equal((await contact.POST(request(valid, {}, 'contact'))).status, 502);
    assert.equal(calls, 1); assert.equal(JSON.stringify(read()), before);
    process.env.LEAD_ANALYTICS_DIR = path.join(dir, 'not-a-directory');
    fs.writeFileSync(process.env.LEAD_ANALYTICS_DIR, 'MOCK filesystem fault');
    global.fetch = async () => Response.json({ id: 'MOCK_ACCEPTED_NO_METRICS' });
    assert.equal((await contact.POST(request(valid, {}, 'contact'))).status, 200);
    process.env.LEAD_ANALYTICS_DIR = dir;
    assert.equal(JSON.stringify(read()), before);
  });
  test('authenticated diagnostic: owned address, deterministic TEST ack, IDs returned, no AI or metrics', async () => {
    const before = JSON.stringify(read()); const calls = [];
    process.env.DEEPSEEK_API_KEY = 'MOCK_ONLY_AI_KEY';
    global.fetch = async (url, options) => {
      assert.equal(url, 'https://api.resend.com/emails');
      calls.push(JSON.parse(options.body));
      return Response.json({ id: 'MOCK_DIAGNOSTIC_' + calls.length });
    };
    const response = await contact.POST(request({ ...valid, email: 'hello@enkay.dev' }, { 'x-enkay-diagnostics': process.env.ENKAY_DIAGNOSTICS_TOKEN }, 'contact'));
    assert.equal(response.status, 200);
    assert.deepEqual((await response.json()).resendIds, { owner: 'MOCK_DIAGNOSTIC_1', acknowledgement: 'MOCK_DIAGNOSTIC_2' });
    assert.equal(calls.length, 2);
    for (const payload of calls) assert.match(payload.subject, /^\[TEST\]/);
    assert.match(calls[1].text, /deterministic test/);
    assert.equal(JSON.stringify(read()), before);
    delete process.env.DEEPSEEK_API_KEY;
  });
  test('corrupt aggregates fail closed without overwrite; invalid direct dimensions never persist', async () => {
    const file = path.join(dir, day + '.json');
    const before = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, '{"MOCK_CORRUPT":true}');
    await assert.rejects(aggregate.recordLeadEvent('page_view', '/', 'hero'), /Invalid aggregate/);
    assert.equal(fs.readFileSync(file, 'utf8'), '{"MOCK_CORRUPT":true}');
    fs.writeFileSync(file, before);
    await assert.rejects(aggregate.recordLeadEvent('page_view', '/?private=secret', 'hero'), /Invalid aggregate/);
    assert.equal(fs.readFileSync(file, 'utf8'), before);
    const response = await analytics.POST(request({ event: 'page_view', path: '/' }, { 'x-enkay-diagnostics': 'MOCK_WRONG_TOKEN' }));
    assert.equal(response.status, 403);
    assert.equal(fs.readFileSync(file, 'utf8'), before);
  });
  test('bounded stream, JSON types, proxy origin, missing origin and content type enforcement', async () => {
    const helpers = require('../lib/contact-helpers.ts');
    assert.equal(helpers.sameOrigin(new Request('http://localhost:3000/api/contact', { headers: { origin: 'https://enkay.dev' } })), true);
    for (const body of ['null', '[]', '{invalid']) {
      const req = new Request('https://enkay.dev/api/analytics', { method: 'POST', headers: { origin: 'https://enkay.dev', 'content-type': 'application/json' }, body });
      assert.equal((await analytics.POST(req)).status, 400);
    }
    assert.equal((await analytics.POST(request({ event: 'page_view', path: '/' }, { 'content-type': 'text/plain' }))).status, 415);
    const noOrigin = request({ event: 'page_view', path: '/' }); noOrigin.headers.delete('origin');
    assert.equal((await analytics.POST(noOrigin)).status, 403);
    const stream = new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode('x'.repeat(2000))); controller.close(); } });
    const req = new Request('https://enkay.dev/api/analytics', { method: 'POST', headers: { origin: 'https://enkay.dev', 'content-type': 'application/json' }, body: stream, duplex: 'half' });
    assert.equal((await analytics.POST(req)).status, 413);
  });
  test('ephemeral global rate limit eventually rejects without network or personal keys', async () => {
    let calls = 0;
    global.fetch = async () => { calls++; return Response.json({ error: 'MOCK rejection' }, { status: 500 }); };
    let limited = false;
    for (let i = 0; i < 35; i++) {
      const before = calls;
      const response = await contact.POST(request(valid, {}, 'contact'));
      if (response.status === 429) { limited = true; assert.equal(calls, before); break; }
      assert.equal(response.status, 502);
    }
    assert.equal(limited, true);
  });
}
