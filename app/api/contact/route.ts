export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import type { Transporter } from "nodemailer";

type ContactPayload = Partial<{
  name: string;
  email: string;
  subject: string;
  message: string;
}>;

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined) return fallback;
  return ["true", "1", "yes"].includes(value.toLowerCase());
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

async function buildTransporter() {
  const { default: nodemailer } = await import("nodemailer");

  const requiredEnv = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
  ] as const;

  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing SMTP environment variables: ${missing
        .map((key) => `"${key}"`)
        .join(", ")}`
    );
  }

  const port = Number(process.env.SMTP_PORT);

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a valid number");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: parseBoolean(process.env.SMTP_SECURE, port === 465),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

let cachedTransporter: Transporter | null = null;

async function getTransporter(): Promise<Transporter> {
  if (!cachedTransporter) {
    const transporter = await buildTransporter();
    try {
      await transporter.verify();
      cachedTransporter = transporter;
    } catch (error) {
      throw error;
    }
  }

  return cachedTransporter!;
}

function validatePayload(payload: ContactPayload) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const subject = payload.subject?.trim();
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    throw new Error("Name, email, and message are required.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    throw new Error("Please use a valid email address.");
  }

  return {
    name,
    email,
    subject,
    message,
  };
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  let validated;

  try {
    validated = validatePayload(payload);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Please check your input.";

    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, email, subject, message } = validated;

  try {
    const transporter = await getTransporter();
    const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
    const recipient =
      process.env.CONTACT_RECIPIENT ?? "missuply@aol.com";
    const resolvedSubject =
      (subject?.length ?? 0) > 0
        ? `[Contact] ${subject}`
        : "New contact form submission";

    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: resolvedSubject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        subject ? `Subject: ${subject}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${
          subject
            ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact form email:", error);

    const configurationIssue =
      error instanceof Error &&
      (error.message.includes("Missing SMTP") ||
        error.message.includes("SMTP_PORT"));

    return NextResponse.json(
      {
        error: configurationIssue
          ? "Contact form is not configured correctly. Please check the server logs and environment variables."
          : "We couldn't send your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}

