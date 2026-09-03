"use client";

import { useState, type FormEvent } from "react";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  TriangleAlert,
  User,
} from "lucide-react";

const PROJECT_TYPES = [
  "Signage & Large Format",
  "Vehicle Branding",
  "Corporate Gifts & Apparel",
  "Office Supplies & Print",
  "Other",
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "projectType" | "message", string>
>;

const fieldWrapClasses = "relative mt-2";

function fieldClasses(hasError?: string) {
  return `w-full rounded-xl border bg-gray-50 py-3 pl-11 pr-4 text-sm text-ink-900 placeholder:text-gray-400 transition-colors focus:bg-white focus:outline-none focus:ring-4 ${
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-50"
      : "border-gray-200 focus:border-brand-600 focus:ring-brand-50"
  }`;
}

const labelClasses = "text-sm font-semibold text-ink-900";
const iconClasses =
  "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      projectType: String(formData.get("projectType") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setErrors(data?.errors || {});
        setErrorMessage(
          data?.message ||
            "We couldn't send your message. Please try again in a moment.",
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Check your connection and try again.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl shadow-gray-200/50 sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink-900">Message sent</h3>
        <p className="mt-2 max-w-sm text-gray-600">
          Thanks for reaching out — our Ruiru team will get back to you
          within one business day. A confirmation has been sent to your
          email.
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
      noValidate
      className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50 sm:p-10"
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500" />

      <h2 className="text-2xl font-bold text-ink-900">Send us a Message</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        Fill in the form below and our team will respond within one business
        day.
      </p>

      {status === "error" && errorMessage && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <div className={fieldWrapClasses}>
            <User className={iconClasses} strokeWidth={1.75} />
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className={fieldClasses(errors.name)}
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <div className={fieldWrapClasses}>
            <Mail className={iconClasses} strokeWidth={1.75} />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={fieldClasses(errors.email)}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <div className={fieldWrapClasses}>
            <Phone className={iconClasses} strokeWidth={1.75} />
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+254 700 000000"
              className={fieldClasses(errors.phone)}
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project Type
          </label>
          <div className={fieldWrapClasses}>
            <Briefcase className={iconClasses} strokeWidth={1.75} />
            <select
              id="projectType"
              name="projectType"
              defaultValue=""
              className={`${fieldClasses(errors.projectType)} appearance-none pr-10`}
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
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              strokeWidth={1.75}
            />
          </div>
          {errors.projectType && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
              {errors.projectType}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <div className={fieldWrapClasses}>
          <MessageSquare
            className="pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-gray-400"
            strokeWidth={1.75}
          />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your goals..."
            className={`${fieldClasses(errors.message)} resize-none`}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-brand-600/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            Sending...
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
