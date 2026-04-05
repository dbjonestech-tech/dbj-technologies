import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

/* ─── HTML SANITIZATION ─────────────────────────── */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ─── SERVER-SIDE VALIDATION (defense in depth) ──── */
const contactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email().max(320),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(200).optional().default(""),
  budget: z.string().min(1).max(100),
  projectType: z.string().min(1).max(100),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, company, budget, projectType, message } = result.data;

    // Sanitize ALL user input before HTML interpolation
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not provided"),
      company: escapeHtml(company || "Not provided"),
      budget: escapeHtml(budget),
      projectType: escapeHtml(projectType),
      message: escapeHtml(message),
    };

    // Create transporter (configure via .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <h2>New Project Inquiry from ${safe.name}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${safe.name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${safe.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${safe.phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${safe.company}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Budget</td><td style="padding:8px;border-bottom:1px solid #eee;">${safe.budget}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Project Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${safe.projectType}</td></tr>
      </table>
      <h3 style="margin-top:20px;">Message</h3>
      <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${safe.message}</p>
    `;

    // Only attempt to send if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"DBJ Technologies Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || "hello@dbjtechnologies.com",
        replyTo: email,
        subject: `New Project Inquiry: ${safe.projectType} — ${safe.name}`,
        html: htmlBody,
      });
    } else {
      // Log to console in dev when SMTP isn't configured
      console.log("──────────────────────────────────────");
      console.log("CONTACT FORM SUBMISSION (SMTP not configured)");
      console.log("──────────────────────────────────────");
      console.log({ name, email, phone, company, budget, projectType, message });
      console.log("──────────────────────────────────────");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
