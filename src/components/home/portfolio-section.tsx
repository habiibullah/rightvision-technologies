
const projects = [
  {
    number: "01",
    name: "Acadivio",
    category: "Education Technology",
    status: "V1 Production Ready",
    description:
      "A multi-school management platform designed to simplify academic administration, assessments, student records, and academic reporting.",
    technologies: ["Flutter", "FastAPI", "PostgreSQL"],
    gradient: "from-blue-700 to-indigo-900",
  },
  {
    number: "02",
    name: "Student Result Management API",
    category: "Backend & API Development",
    status: "Backend Project",
    description:
      "An academic results management backend supporting student records, continuous assessments, examination scores, and individual student reports.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    gradient: "from-slate-700 to-slate-900",
  },
  {
    number: "03",
    name: "Roviku API",
    category: "E-commerce Backend",
    status: "Development Project",
    description:
      "An automobile e-commerce API project featuring authentication, vehicle listings, and searchable inventory.",
    technologies: ["Laravel", "PHP", "PostgreSQL"],
    gradient: "from-orange-600 to-red-800",
  },
  {
    number: "04",
    name: "Examivo",
    category: "Examination Technology",
    status: "In Development",
    description:
      "An offline-first examination system being developed for schools to organize and conduct computer-based examinations.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    gradient: "from-emerald-700 to-teal-900",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 bg-slate-50 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Selected Projects
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102544] sm:text-4xl">
            Explore Our Software Engineering Work
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A selection of software products and development
            projects demonstrating our approach to solving
            practical challenges with technology.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project visual */}
              <div
                className={`relative flex min-h-52 items-center justify-center bg-gradient-to-br ${project.gradient} p-8`}
              >
                <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold text-white">
                  {project.status}
                </span>

                <div className="text-center text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Project {project.number}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Project details */}
              <div className="p-8">
                <p className="leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-6">
                  <h4 className="mb-4 text-sm font-bold text-[#102544]">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio footer */}
        <div className="mt-12 text-center">
          <p className="text-sm leading-7 text-slate-500">
            These projects include proprietary software products
            and independent software engineering work.
            Development and availability vary by project.
          </p>
        </div>
      </div>
    </section>
  );
}
