import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#1E3226] text-[#F8EDC3]">

      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Luxury concierge"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(111,125,123,0.2),rgba(30,50,38,0.9))]" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-end px-6 py-20 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/80">
              PMP Inc
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-light uppercase leading-[1.05] tracking-[0.04em]">
              Curated connections. Elevated living.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[#F8EDC3]/85">
              A refined network of trusted professionals, services, and lifestyle
              support designed for those who expect more.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (FIXED SECTION) */}
      <section className="bg-[#1E3226] text-[#F8EDC3] px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-16">

          {/* STEP 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 border-t border-[rgba(248,237,195,0.15)] pt-10">
            <div className="text-3xl font-light text-[#CCB363]">01</div>

            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[0.18em] leading-snug">
                Tell us what you need
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#F8EDC3]/85">
                Share your vision, priorities, and the level of support you are looking for.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 border-t border-[rgba(248,237,195,0.15)] pt-10">
            <div className="text-3xl font-light text-[#CCB363]">02</div>

            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[0.18em] leading-snug">
                Receive a curated direction
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#F8EDC3]/85">
                We identify the services, professionals, and connections that best align with your needs.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 border-t border-[rgba(248,237,195,0.15)] pt-10">
            <div className="text-3xl font-light text-[#CCB363]">03</div>

            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[0.18em] leading-snug">
                Move forward beautifully
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#F8EDC3]/85">
                You step into a more seamless experience with trusted support already in place.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[#F8EDC3] text-[#1E3226] px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
            Services
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-light uppercase tracking-[0.04em]">
            A refined approach to support
          </h2>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-[#CCB363] px-10 py-4 text-sm uppercase tracking-[0.2em] text-[#1E3226] hover:bg-[#C27E35] hover:text-[#F8EDC3]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#76290B] px-6 py-20 md:px-12 lg:px-16 text-[#F8EDC3]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/80">
            Private Access
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-light uppercase tracking-[0.04em]">
            Ready to get started?
          </h2>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#CCB363] px-10 py-4 text-sm uppercase tracking-[0.2em] text-[#1E3226] hover:bg-[#F8EDC3]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}