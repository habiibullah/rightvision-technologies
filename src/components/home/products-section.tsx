
const products = [
  {
    name: "Acadivio",
    category: "Multi-School Management Platform",
    status: "V1 — Production Ready",
    isProductionReady: true,
    description:
      "Acadivio is a comprehensive multi-school management platform designed to simplify school administration, academic operations, student records, assessments, and result processing. Version 1 development is complete and the application is ready for production deployment.",
    features: [
      "Multi-School Administration",
      "Student & Academic Records",
      "Continuous Assessment & Examinations",
      "Individual Student Report Generation",
      "Academic Session & Term Management",
      "School Subscription Management",
      "Secure Role-Based Access",
      "Android Mobile Application",
    ],
    initials: "A",
    accent: "from-blue-600 to-indigo-800",
    footer:
      "Version 1 completed. Preparing for production deployment and commercial availability.",
  },
  {
    name: "Examivo",
    category: "Offline Examination Software",
    status: "In Development",
    isProductionReady: false,
    description:
      "Examivo is an offline-first examination management solution being developed to help educational institutions organize and conduct computer-based examinations within their school computer laboratories.",
    features: [
      "Offline-First Examination Design",
      "School Examination Management",
      "Computer-Based Assessments",
      "Local Network Deployment",
    ],
    initials: "E",
    accent: "from-orange-500 to-orange-700",
    footer:
      "Currently under active development. Further product details will be announced as development progresses.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-white px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Products
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102544] sm:text-4xl">
            Innovative Software Products
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Beyond custom software development, Right Vision
            Technologies builds innovative digital products
            that address practical challenges in education
            and business operations.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product visual */}
              <div
                className={`relative flex min-h-64 items-center justify-center bg-gradient-to-br ${product.accent} p-8`}
              >
                {/* Product status */}
                <span
                  className={`absolute left-6 top-6 rounded-full px-4 py-2 text-xs font-bold ${
                    product.isProductionReady
                      ? "bg-emerald-400 text-emerald-950"
                      : "border border-white/30 bg-white/15 text-white"
                  }`}
                >
                  {product.status}
                </span>

                <div className="text-center text-white">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-white/20 text-5xl font-extrabold shadow-xl">
                    {product.initials}
                  </div>

                  <h3 className="text-3xl font-extrabold">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    {product.category}
                  </p>
                </div>
              </div>

              {/* Product information */}
              <div className="p-8">
                <p className="leading-7 text-slate-600">
                  {product.description}
                </p>

                <h4 className="mt-7 font-bold text-[#102544]">
                  Key Capabilities
                </h4>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span
                        className="font-bold text-orange-600"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Product availability */}
                <div className="mt-8 border-t border-slate-100 pt-5">
                  <p className="text-sm font-medium leading-6 text-slate-500">
                    {product.footer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
