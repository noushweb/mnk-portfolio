import { NextResponse } from "next/server";

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

    // 1. Auto-reply to the lead
    const autoReply = await resend.emails.send({
      from: "Mohammed Noushad <hello@enkay.dev>",
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `<p>Hi ${name},</p>
<p>Thanks for your message! I've received it and will get back to you within 24 hours.</p>
<p>In the meantime, check out my work at <a href="https://enkay.dev/work">enkay.dev/work</a>.</p>
<p>— Mohammed Noushad<br/>Senior Product Designer<br/>Dubai, UAE</p>`,
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
<tr><td><strong>Message</strong></td><td>${message}</td></tr>
</table>`,
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
