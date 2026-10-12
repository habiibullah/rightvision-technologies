
import Link from "next/link";
import ServicesSection from "@/components/home/services-section";
import ProductsSection from "@/components/home/products-section";
import AboutSection from "@/components/home/about-section";

const services = [
  "Website Development",
  "Mobile Applications",
  "Backend & API Development",
  "Business Automation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
              RV
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                RIGHT VISION
              </span>
              <span className="text-xs font-semibold tracking-[0.22em] text-orange-600">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <Link href="#about" className="hover:text-orange-600">
              About
            </Link>
            <Link href="#services" className="hover:text-orange-600">
              Services
            </Link>
            <Link href="#products" className="hover:text-orange-600">
              Products
            </Link>
            <Link href="#contact" className="hover:text-orange-600">
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 md:inline-flex"
          >
            Get a Quote
          </Link>

          <Link
            href="#contact"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#102544] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Innovation Through Technology
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We Build Digital Solutions That{" "}
              <span className="text-orange-400">
                Grow Businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Right Vision Technologies delivers professional websites,
              mobile applications, backend systems, and digital solutions
              that help businesses operate smarter and grow confidently.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-lg bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Request a Quote →
              </Link>

              <Link
                href="#services"
                className="rounded-lg border border-slate-500 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-slate-300">
                  Right Vision Digital Solutions
                </span>
              </div>

              <div className="space-y-4">
                <div className="h-4 w-2/3 rounded bg-orange-400/80" />
                <div className="h-3 w-full rounded bg-white/20" />
                <div className="h-3 w-5/6 rounded bg-white/20" />

                <div className="grid grid-cols-2 gap-4 pt-5">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex min-h-28 items-center rounded-xl border border-white/10 bg-white/10 p-4"
                    >
                      <span className="text-sm font-semibold text-white">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl bg-orange-500 px-5 py-4 font-semibold text-white shadow-xl sm:-left-6">
              Building What&apos;s Next
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <ProductsSection />
    </main>
  );
}
