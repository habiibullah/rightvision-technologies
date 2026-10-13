"use client";

import { useState, type FormEvent } from "react";

const contactDetails = [
  {
    title: "Email Us",
    value: "rightvisionca@gmail.com",
    href: "mailto:rightvisionca@gmail.com",
  },
  {
    title: "Call or WhatsApp",
    value: "+234 813 772 2242",
    href: "https://wa.me/2348137722242",
  },
  {
    title: "Our Location",
    value: "Osun State, Nigeria",
    href: null,
  },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Backend & API Development",
  "Business Automation",
  "School Technology Solutions",
  "Other",
];

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    if (payload.name.length < 2 || payload.name.length > 100) {
      setStatus({
        type: "error",
        message: "Please enter a name containing 2 to 100 characters.",
      });
      return;
    }

    if (payload.message.length < 20 || payload.message.length > 5000) {
      setStatus({
        type: "error",
        message: "Project details must contain 20 to 5000 characters.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: { message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your enquiry. Please try again.",
        );
      }

      setStatus({
        type: "success",
        message: result.message || "Your enquiry has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-white px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102544] sm:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have a software project in mind? Tell us about your requirements and
            let&apos;s discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact information */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#102544] p-8 text-white shadow-xl sm:p-10">
              <h3 className="text-2xl font-extrabold">Contact Information</h3>

              <p className="mt-4 leading-7 text-slate-300">
                We work with businesses, entrepreneurs, educational
                institutions, and organizations seeking practical technology
                solutions.
              </p>

              <div className="mt-9 space-y-8">
                {contactDetails.map((detail) => (
                  <div key={detail.title}>
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-400">
                      {detail.title}
                    </h4>

                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="break-words text-base font-medium text-white transition hover:text-orange-300"
                        target={
                          detail.href.startsWith("https") ? "_blank" : undefined
                        }
                        rel={
                          detail.href.startsWith("https")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium">{detail.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/15 pt-7">
                <p className="text-sm leading-7 text-slate-300">
                  Serving clients across Nigeria and internationally through
                  remote collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Functional quotation form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10">
              <h3 className="text-2xl font-extrabold text-[#102544]">
                Request a Project Quote
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tell us about your project and the services you need. We&apos;ll
                review your enquiry and get back to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Your full name"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Service Required
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    minLength={20}
                    maxLength={5000}
                    disabled={isSubmitting}
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 disabled:opacity-60"
                  />
                </div>

                {/* Honeypot field for automated spam */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                >
                  <label htmlFor="contact-website">
                    Leave this field empty
                  </label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {status && (
                  <div
                    role={status.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`rounded-lg border px-4 py-3 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#F97316] px-6 py-4 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Sending Your Enquiry..."
                    : "Submit Project Enquiry →"}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Prefer to speak with us directly? Contact us through email or
                  WhatsApp using the details provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
