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
    <main className="bg-[#5b4636] text-[#f3eee7]">
      {/* hero (might need to clean up later) */}
      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
            Services
          </p>

          <h1 className="mt-8 max-w-5xl text-5xl font-light uppercase leading-[1.05] tracking-[0.04em] md:text-7xl">
            Refined support, thoughtfully offered.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-[#efe7dd] md:text-xl">
            Our services are designed for clients who want more than convenience.
            They want quality, trust, discretion, and a more considered way to
            access the right support.
          </p>
        </div>
      </section>

      {/* services grid */}
      <section className="bg-[#f3eee7] px-8 py-24 text-[#5b4636] md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
            What We Offer
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            A more elevated way to connect, plan, and move forward.
          </h2>

          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 120}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block overflow-hidden border border-[rgba(91,70,54,0.12)] bg-[#f3eee7] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(91,70,54,0.08)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[260px] w-full overflow-hidden">
                    <Image
                      src={imageMap[service.slug]}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* the overlay (come back and couble check) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(91,70,54,0.45),rgba(243,238,231,0.05))]" />

                    {/* EYEBROW ON IMAGE */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-white">
                        {service.eyebrow}
                      </p>
                    </div>
                  </div>

                  {/* my content */}
                  <div className="px-8 py-10">
                    <h3 className="text-2xl font-light uppercase tracking-[0.04em] text-[#5b4636]">
                      {service.title}
                    </h3>

                    <p className="mt-6 leading-8 text-[#6b5647]">
                      {service.shortText}
                    </p>

                    <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[#9a7b67] opacity-0 transition duration-300 group-hover:opacity-100">
                      View Details
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl border border-[rgba(243,238,231,0.12)] px-8 py-16 md:px-14 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            Private Inquiry
          </p>

          <h2 className="mt-8 max-w-3xl text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            Ready to find the right fit?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#efe7dd]">
            Whether you need one trusted introduction or broader concierge-style
            guidance, PMP Inc is here to help direct the next step.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4]"
            >
              Contact Us
            </Link>

            <Link
              href="/network"
              className="inline-flex items-center justify-center border border-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636]"
            >
              Explore Network
            </Link>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center border border-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636]"
            >
              Continue to Checkout
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}