"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "loading" | "success" | "error";

interface ContactFormFields {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export function ContactForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormFields = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setSubmissionState("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const { error } = await response.json().catch(() => ({}));
        throw new Error(
          typeof error === "string"
            ? error
            : "We couldn't send your message. Please try again."
        );
      }

      form.reset();
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again."
      );
    } finally {
      setSubmissionState((previous) =>
        previous === "loading" ? "idle" : previous
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" name="contact">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold uppercase tracking-wide"
        >
          Enter your Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold uppercase tracking-wide"
        >
          E-mail address:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-sm font-semibold uppercase tracking-wide"
        >
          Message Subject:
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold uppercase tracking-wide"
        >
          Enter your Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="border border-black bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
        disabled={submissionState === "loading"}
      >
        {submissionState === "loading" ? "Sending…" : "Send"}
      </button>

      {submissionState === "success" && (
        <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
          Message sent! We’ll get back to you soon.
        </p>
      )}

      {submissionState === "error" && errorMessage && (
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

