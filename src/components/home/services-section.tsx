
const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "We design and develop modern, responsive websites that strengthen your online presence and help you reach more customers.",
    features: [
      "Corporate & Business Websites",
      "Portfolio Websites",
      "E-commerce Solutions",
    ],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "We build user-friendly mobile applications that bring your services closer to customers and simplify everyday operations.",
    features: [
      "Android Applications",
      "Cross-platform Apps",
      "Mobile Business Solutions",
    ],
  },
  {
    number: "03",
    title: "Backend & API Development",
    description:
      "We develop secure backend systems, databases, and APIs that power reliable applications and connect business services.",
    features: [
      "REST API Development",
      "Database Design",
      "System Integration",
    ],
  },
  {
    number: "04",
    title: "Business Automation",
    description:
      "We help organizations reduce repetitive work through practical digital tools and customized software solutions.",
    features: [
      "Workflow Automation",
      "Management Systems",
      "Custom Software Solutions",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-slate-50 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            What We Do
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102544] sm:text-4xl">
            Technology Solutions Built Around Your Needs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From your first website to a complete business management
            platform, we deliver digital solutions designed to solve
            real-world problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-lg font-bold text-orange-600">
                  {service.number}
                </div>

                <span className="text-sm font-semibold text-slate-400 transition group-hover:text-orange-600">
                  RIGHT VISION
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#102544]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-7 border-t border-slate-100 pt-6">
                <p className="mb-4 text-sm font-bold text-slate-800">
                  Our Capabilities
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
