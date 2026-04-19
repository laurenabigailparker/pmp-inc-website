import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { services } from "../data/services";

export default function ServicesPage() {
  const imageMap: Record<string, string> = {
    "luxury-concierge": "/images/concierge.jpg",
    "curated-referrals": "/images/referrals.jpg",
    "design-support": "/images/design-support.jpg",
    "private-lifestyle-support": "/images/lifestyle-new.jpg",
    "digital-presence": "/images/web-design.jpg",
  };

  return (
    <main className="bg-[#1E3226] text-[#F8EDC3]">
      <section className="bg-[#1E3226] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/85">
            Services
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Refined support, thoughtfully offered.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8 md:text-xl">
            Our services are designed for clients who want more than convenience.
            They want quality, trust, discretion, and a more considered way to
            access the right support.
          </p>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-5 py-16 text-[#1E3226] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#C27E35]">
            What We Offer
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            A more elevated way to connect, plan, and move forward.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 120}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group block overflow-hidden border bg-[#fff7dd] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] ${
                    service.slug === "digital-presence"
                      ? "border-[#C27E35] ring-1 ring-[rgba(194,126,53,0.18)]"
                      : "border-[rgba(194,126,53,0.18)]"
                  }`}
                >
                  <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px] md:h-[260px]">
                    <Image
                      src={imageMap[service.slug]}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,50,38,0.4),rgba(248,237,195,0.04))]" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p
                        className={`text-xs uppercase tracking-[0.3em] text-[#F8EDC3] ${
                          service.slug === "digital-presence" ? "font-semibold" : ""
                        }`}
                      >
                        {service.eyebrow}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <h3 className="text-xl font-light uppercase tracking-[0.04em] text-[#1E3226] sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#1E3226]/80 sm:leading-8">
                      {service.shortText}
                    </p>

                    <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[#C27E35] opacity-0 transition duration-300 group-hover:opacity-100">
                      View Details
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#6F7D7B] px-5 py-16 text-[#F8EDC3] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(248,237,195,0.16)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#CCB363]">
            Private Inquiry
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to find the right fit?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8">
            Whether you need one trusted introduction or broader concierge-style
            guidance, PMP Inc is here to help direct the next step.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#CCB363] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#1E3226] transition hover:bg-[#F8EDC3] sm:px-10"
            >
              Contact Us
            </Link>

            <Link
              href="/network"
              className="inline-flex items-center justify-center border border-[#CCB363] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#F8EDC3] transition hover:bg-[#CCB363] hover:text-[#1E3226] sm:px-10"
            >
              Explore Network
            </Link>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center border border-[#CCB363] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#F8EDC3] transition hover:bg-[#CCB363] hover:text-[#1E3226] sm:px-10"
            >
              Continue to Checkout
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}