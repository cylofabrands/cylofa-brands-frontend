"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

const PROJECT_TYPES = [
  "Signage & Large Format",
  "Vehicle Branding",
  "Corporate Gifts & Apparel",
  "Office Supplies & Print",
  "Other",
];

const inputClasses =
  "mt-2 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink-900 placeholder:text-gray-400 transition-colors focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink-900">Message sent</h3>
        <p className="mt-2 max-w-sm text-gray-600">
          Thanks for reaching out — our Ruiru team will get back to you
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10"
    >
      <h2 className="text-2xl font-bold text-ink-900">Send us a Message</h2>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 700 000000"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="projectType"
            className="text-sm font-medium text-ink-900"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select an option
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-ink-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your goals..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <Send
          className={`h-4 w-4 transition-transform ${
            status === "submitting"
              ? "animate-pulse"
              : "group-hover:translate-x-1"
          }`}
        />
      </button>
    </form>
  );
}
