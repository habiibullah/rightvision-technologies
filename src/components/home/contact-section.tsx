
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

export default function ContactSection() {
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
            Have a software project in mind? Tell us about your
            requirements and let&apos;s discuss how we can help
            bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact information */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#102544] p-8 text-white shadow-xl sm:p-10">
              <h3 className="text-2xl font-extrabold">
                Contact Information
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                We work with businesses, entrepreneurs,
                educational institutions, and organizations
                seeking practical technology solutions.
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
                          detail.href.startsWith("https")
                            ? "_blank"
                            : undefined
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
                      <p className="text-base font-medium">
                        {detail.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/15 pt-7">
                <p className="text-sm leading-7 text-slate-300">
                  Serving clients across Nigeria and
                  internationally through remote collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Quote request form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-extrabold text-[#102544]">
                Request a Project Quote
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Share a few details about your project.
                Our online enquiry submission feature
                is being prepared.
              </p>

              <form
                className="mt-8 space-y-6"
              >
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
                      disabled
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500"
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
                      disabled
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500"
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
                    disabled
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500"
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
                    disabled
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled
                  className="w-full cursor-not-allowed rounded-lg bg-slate-400 px-6 py-4 font-bold text-white"
                >
                  Online Quote Requests Coming Soon
                </button>

                <p className="text-center text-sm text-slate-500">
                  For immediate enquiries, please use the
                  email or WhatsApp contact details provided.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
