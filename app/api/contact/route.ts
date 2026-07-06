import { NextResponse } from "next/server";

async function generatePersonalizedReply(
  name: string,
  email: string,
  message: string,
  source: string
): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) return defaultReply(name);

  const prompt = `You are Mohammed Noushad, a Senior Product Designer based in Dubai with 11+ years of experience. Someone just filled the contact form on your portfolio site (enkay.dev). Write a short, warm, personal email reply to them.

Context about you:
- Senior Product Designer, 11+ years in UX/UI
- Enterprise design systems, fintech, travel, logistics
- Built a 60+ component design system at Valmont Industries
- Designs and codes (React, Next.js, TypeScript)
- Uses AI tools daily (Claude, Cursor, n8n)
- Based in Dubai, originally from Kerala, India
- Portfolio: enkay.dev, CV: enkay.dev/casestudy/cv/mohammed_noushad_cv_ats.pdf
- Email: hello@enkay.dev

The person who contacted you:
- Name: ${name}
- Email: ${email}
- Source page: ${source || "website"}
- Their message: "${message}"

Rules for your reply:
1. Keep it 3-5 sentences. Warm but not long-winded.
2. Reference something SPECIFIC from their message — show you actually read it.
3. Never sound like a template, bot, or auto-reply. Write like a real human.
4. If they're asking about hiring/freelance: mention your availability, link your CV or portfolio.
5. If they're complimenting your work: thank them genuinely, ask what caught their eye.
6. If their message is generic/vague: ask a specific question to start a real conversation.
7. Sign as "Mohammed" — never "Mohammed Noushad — Senior Product Designer" or any title.
8. Use casual, friendly English. No corporate speak. No "I am excited to..." or "I would love to connect."
9. Do NOT start with "Hi [name]" — use their name naturally in the first sentence.
10. Include your email (hello@enkay.dev) only if relevant.

IMPORTANT: Output ONLY the email body in plain text. No subject line. No HTML. No quotes around it. Just the raw text.`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
        max_tokens: 300,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.error("DeepSeek API error:", res.status);
      return defaultReply(name);
    }

    const data = await res.json();
    const aiReply = data.choices?.[0]?.message?.content?.trim();

    if (!aiReply || aiReply.length < 20) {
      return defaultReply(name);
    }

    return aiReply;
  } catch (err) {
    console.error("DeepSeek reply generation failed:", err);
    return defaultReply(name);
  }
}

function defaultReply(name: string): string {
  return `Hey ${name},\n\nThanks for your message — I got it. I read every submission myself and usually reply within 24 hours.\n\nIn the meantime, my work is at enkay.dev/work if you want to look around.\n\nTalk soon,\nMohammed`;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 503 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message, source } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const sourceLabel = source || "website";

    // 1. Generate personalized AI reply (falls back to default if AI fails)
    const replyBody = await generatePersonalizedReply(name, email, message, sourceLabel);

    const autoReply = await resend.emails.send({
      from: "Mohammed Noushad <hello@enkay.dev>",
      to: email,
      subject: `Re: Your message — Mohammed`,
      replyTo: "hello@enkay.dev",
      text: replyBody,
    });

    // 2. Notify Noushad
    const notify = await resend.emails.send({
      from: "Enkay Bot <hello@enkay.dev>",
      to: "hello@enkay.dev",
      subject: `New Lead: ${name} — ${sourceLabel}`,
      html: `<h2>New Lead from enkay.dev</h2>
<table cellpadding="8" style="border-collapse:collapse">
<tr><td><strong>Name</strong></td><td>${name}</td></tr>
<tr><td><strong>Email</strong></td><td>${email}</td></tr>
<tr><td><strong>Source</strong></td><td>${sourceLabel}</td></tr>
<tr><td><strong>Message</strong></td><td>${message.replace(/</g, "&lt;")}</td></tr>
</table>
<br/><hr/><br/>
<h3>Auto-reply sent:</h3>
<pre style="white-space:pre-wrap;font-family:inherit">${replyBody.replace(/</g, "&lt;")}</pre>`,
    });

    if (autoReply.error || notify.error) {
      console.error("Resend error:", autoReply.error || notify.error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Thanks! I'll get back to you soon." });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
