// Explicitly simulated browser unit tests; no network or real enquiries.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const source = fs.readFileSync(path.join(__dirname, '../components/EnquiryLink.tsx'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
function fixture(options = {}) {
  const calls = [];
  const target = { tabIndex: 0, scrollIntoView: (value) => calls.push(['scroll', value]), focus: (value) => calls.push(['focus-section', value]) };
  const win = { location: new URL(options.current || 'https://enkay.dev/ux-audit?enkay_test=1'), history: { state: { _NA: true }, pushState: (state, title, value) => calls.push(['history', value]) } };
  const exports = {};
  const sandbox = { exports, module: { exports }, require, URL, window: win, document: { getElementById: () => options.missing ? null : target } };
  vm.runInNewContext(compiled, sandbox);
  const event = { defaultPrevented: false, button: 0, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false, currentTarget: { href: options.href || 'https://enkay.dev/ux-audit#project-enquiry' }, preventDefault() { this.defaultPrevented = true; calls.push(['prevent']); }, ...(options.event || {}) };
  sandbox.exports.scrollToEnquiry(event);
  return { calls: JSON.parse(JSON.stringify(calls)), target, event };
}
test('same-page enquiry preserves test query, reveals and focuses section, not form input', () => {
  const { calls, target, event } = fixture();
  assert.equal(event.defaultPrevented, true);
  assert.deepEqual(calls, [['prevent'], ['history', '/ux-audit?enkay_test=1#project-enquiry'], ['scroll', { behavior: 'instant', block: 'start' }], ['focus-section', { preventScroll: true }]]);
  assert.equal(target.tabIndex, -1);
});
test('modified clicks, non-primary buttons and previously cancelled clicks remain native', () => {
  for (const event of [{ ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }, { defaultPrevented: true }]) assert.deepEqual(fixture({ event }).calls, []);
});
test('cross-page, external, unrelated and missing targets remain native', () => {
  for (const href of ['https://enkay.dev/#contact', 'https://example.com/ux-audit#project-enquiry', 'https://enkay.dev/ux-audit#relevant-work']) assert.deepEqual(fixture({ href }).calls, []);
  assert.deepEqual(fixture({ missing: true }).calls, []);
});
test('repeat anchor still reveals form without a duplicate history entry', () => {
  const { calls } = fixture({ current: 'https://enkay.dev/ux-audit#project-enquiry' });
  assert.equal(calls.some(c => c[0] === 'history'), false);
  assert.equal(calls.some(c => c[0] === 'scroll'), true);
});
