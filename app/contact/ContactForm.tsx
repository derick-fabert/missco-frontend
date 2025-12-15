export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden">
        <label>
          Don’t fill this out if you’re human:
          <input name="bot-field" />
        </label>
      </p>

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
        className="inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
      >
        Send
      </button>
    </form>
  );
}

