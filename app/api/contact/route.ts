import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  fullname: string;
  email: string;
  message: string;
  website?: string;
}

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 3;

const submissions = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = submissions.get(ip);

  if (!entry || entry.resetAt <= now) {
    submissions.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (entry.count >= rateLimitMax) {
    return true;
  }

  entry.count += 1;
  return false;
}

async function sendEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_USER_KEY,
      pass: process.env.BREVO_API_KEY,
    },
  });

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pesan Baru - Flaat Studio</title>
</head>
<body style="margin: 0; padding: 40px 20px; background-color: #f4efeb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #2f4157; border-radius: 12px; overflow: hidden;">
    <tr>
      <td style="padding: 24px; background-color: #2f4157; text-align: center;">
        <h1 style="margin: 0; color: #f4efeb; font-size: 24px; font-weight: 600;">Flaat Studio</h1>
        <p style="margin: 8px 0 0; color: #c7d9e5; font-size: 14px;">New Message</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px 24px; background-color: #ffffff;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 0 0 24px;">
              <p style="margin: 0; color: #577c8e; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Name</p>
              <p style="margin: 4px 0 0; color: #2f4157; font-size: 18px; font-weight: 500;">${data.fullname}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 0 24px;">
              <p style="margin: 0; color: #577c8e; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Email</p>
              <p style="margin: 4px 0 0; color: #2f4157; font-size: 18px; font-weight: 500;"><a href="mailto:${data.email}" style="color: #2f4157; text-decoration: none;">${data.email}</a></p>
            </td>
          </tr>
          <tr>
            <td style="padding: 0;">
              <p style="margin: 0; color: #577c8e; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 8px 0 0; color: #2f4157; font-size: 16px; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px 24px; background-color: #c7d9e5; text-align: center;">
        <p style="margin: 0; color: #2f4157; font-size: 12px;">Flaat Studio • Yogyakarta, Indonesia</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const info = await transporter.sendMail({
    from: '"Flaat Web Submission" <hi@flaat.studio>',
    to: "hi@flaat.studio",
    replyTo: data.email,
    subject: `New inquiry from ${data.fullname}`,
    html: htmlContent,
  });

  return info;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { fullname, email, message, website } = body;

    if (!fullname || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (website?.trim()) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    if (isRateLimited(request)) {
      return NextResponse.json(
        { error: "Terlalu banyak pengiriman. Coba lagi nanti." },
        { status: 429 }
      );
    }

    const info = await sendEmail({ fullname, email, message, website });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
