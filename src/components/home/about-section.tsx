
const values = [
  {
    number: "01",
    title: "Practical Innovation",
    description:
      "We develop technology solutions that address real challenges and create measurable value for organizations.",
  },
  {
    number: "02",
    title: "Quality & Reliability",
    description:
      "We prioritize maintainable software, thoughtful design, security, and dependable performance.",
  },
  {
    number: "03",
    title: "Client-Centered Solutions",
    description:
      "We take time to understand business requirements and build solutions aligned with each client's goals.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-50 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* About content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              About Right Vision
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102544] sm:text-4xl">
              Turning Ideas Into Powerful Digital Solutions
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Right Vision Technologies is a software development
              and digital solutions business focused on helping
              organizations leverage technology to improve operations,
              strengthen their digital presence, and unlock new
              opportunities.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We specialize in modern websites, mobile applications,
              backend systems, business automation, and educational
              technology solutions. Our approach combines technical
              expertise, practical problem-solving, and a commitment
              to building software that serves real needs.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-[#102544]">
                  Our Mission
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  To deliver accessible, reliable, and innovative
                  digital solutions that help businesses and
                  institutions operate more effectively.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-[#102544]">
                  Our Vision
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  To become a trusted technology partner for
                  organizations seeking practical software
                  innovation and sustainable digital growth.
                </p>
              </div>
            </div>
          </div>

          {/* Values panel */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl bg-[#102544] p-8 text-white shadow-xl sm:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Our Core Values
              </p>

              <h3 className="mb-9 text-2xl font-extrabold sm:text-3xl">
                What Drives Our Work
              </h3>

              <div className="space-y-8">
                {values.map((value) => (
                  <div
                    key={value.number}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 font-bold text-orange-400">
                      {value.number}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold">
                        {value.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/15 pt-7">
                <p className="text-sm font-medium leading-7 text-slate-300">
                  Building meaningful technology for businesses,
                  educational institutions, and organizations
                  in Nigeria and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
