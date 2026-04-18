import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Luxury Concierge",
    text: "A refined, high-touch experience designed to make trusted connections feel effortless and beautifully aligned.",
  },
  {
    title: "Curated Network",
    text: "Access to carefully vetted professionals across lifestyle, home, design, business, and digital presence.",
  },
  {
    title: "Design-Led Support",
    text: "With Gateway as our design arm, beauty, presentation, and intentional living remain part of the experience.",
  },
  {
    title: "Digital Presence",
    text: "Refined website design and digital presence built to reflect your brand with clarity, intention, and elevated aesthetic.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Share your vision, priorities, and the level of support you are looking for.",
  },
  {
    number: "02",
    title: "Receive a curated direction",
    text: "We identify the services, professionals, and connections that best align with your needs.",
  },
  {
    number: "03",
    title: "Move forward beautifully",
    text: "You step into a more seamless experience with trusted support already in place.",
  },
];

const reviews = [
  {
    quote:
      "Working with PMP Inc feels different from a standard referral relationship. There is intention, professionalism, and real care behind every connection.",
    name: "Business Owner",
    title: "Founder, Strategic Partner",
  },
  {
    quote:
      "I felt like I finally had one trusted place to turn instead of trying to figure everything out on my own. The experience felt polished, personal, and easy.",
    name: "Private Client",
    title: "Lifestyle Client",
  },
  {
    quote:
      "What stands out most is the standard. PMP Inc is clearly built around trust, alignment, and a strong sense of quality from beginning to end.",
    name: "Professional Partner",
    title: "Trusted Industry Voice",
  },
];

export default function Home() {
  return (
    <main className="bg-[#2C1F1A] text-[#F3EEE7]">
      <section className="relative min-h-[78svh] overflow-hidden sm:min-h-[85svh]">
        <Image
          src="/images/home-hero.jpg"
          alt="Luxury concierge lifestyle"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(212,175,55,0.12),rgba(44,31,26,0.9))]" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center px-5 py-16 sm:min-h-[85svh] sm:px-6 md:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#E8D8B5]">
              PMP Inc
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Trusted connections for beautifully aligned living.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#F3EEE7] sm:text-lg sm:leading-8 md:text-xl">
              PMP Inc offers a more refined way to access trusted professionals,
              elevated services, intentional support, and digital presence
              across lifestyle, design, home, and business needs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/network"
                className="inline-flex items-center justify-center rounded-none bg-[#D4AF37] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#2C1F1A] transition hover:bg-[#C6A96B] sm:px-10"
              >
                Explore The Network
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#D4AF37] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#F3EEE7] transition hover:bg-[#D4AF37] hover:text-[#2C1F1A] sm:px-10"
              >
                Private Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2C1F1A] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 border-y border-[rgba(212,175,55,0.18)] md:grid-cols-2 md:divide-x md:divide-[rgba(212,175,55,0.18)] lg:grid-cols-4">
            {[
              ["Trusted", "Connections"],
              ["Elevated", "Service"],
              ["Curated", "Solutions"],
              ["Private", "Access"],
            ].map(([top, bottom], index) => (
              <div
                key={bottom}
                className={`flex flex-col items-center justify-center px-6 py-10 text-center transition hover:bg-[rgba(212,175,55,0.04)] sm:px-8 sm:py-12 ${
                  index < 3 ? "border-b border-[rgba(212,175,55,0.18)] lg:border-b-0" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-[#C6A96B]">
                  {top}
                </p>
                <h3 className="mt-4 text-xl font-light uppercase tracking-[0.08em] sm:text-2xl">
                  {bottom}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE7] px-5 py-16 text-[#2C1F1A] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
              About PMP Inc
            </p>

            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              One trusted source for a more refined experience.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-[#5B4636] sm:text-lg sm:leading-9">
            <p>
              We created PMP Inc for clients who want more than a list of names.
              Our role is to make trusted connections feel thoughtful,
              intentional, and beautifully aligned from the very beginning.
            </p>

            <p>
              From design support and lifestyle services to vetted home
              professionals, accountants, attorneys, digital presence, and
              specialty referrals, we guide people toward the right fit with
              greater ease and confidence.
            </p>

            <p>
              This is concierge-minded support shaped by trust, presentation,
              discretion, and a clear standard of care.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center border-b border-[#C6A96B] pb-2 text-sm font-medium uppercase tracking-[0.22em] text-[#2C1F1A] transition hover:text-[#C6A96B]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5B4636] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
            What We Offer
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            A curated network shaped by trust, quality, and alignment.
          </h2>

          <div className="mt-16 grid gap-px bg-[rgba(212,175,55,0.18)] md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div
                key={item.title}
                className="group bg-[#5B4636] px-6 py-10 transition hover:bg-[#6A5444] sm:px-8 sm:py-12"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Curated Service
                </p>
                <h3 className="mt-5 text-xl font-light uppercase tracking-[0.04em] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-5 leading-7 text-[#F3EEE7] sm:leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE7] px-5 py-16 text-[#2C1F1A] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
          <div className="relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/images/workspace.jpg"
              alt="Luxury concierge experience"
              fill
              className="object-cover transition duration-[2000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(44,31,26,0.16),rgba(243,238,231,0.03))]" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
              Why Clients Come To Us
            </p>

            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              Because trust changes everything.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-7 text-[#5B4636] sm:text-lg sm:leading-9">
              <p>
                People come to PMP Inc because they want confidence in who they
                work with. They want taste, quality, professionalism, and a
                more seamless path to the right support.
              </p>

              <p>
                We create that by offering one trusted place where refined
                service and thoughtful introductions come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2C1F1A] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
            The Process
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            Simple, considered, and intentionally high-touch.
          </h2>

          <div className="mt-16 divide-y divide-[rgba(212,175,55,0.18)] border-y border-[rgba(212,175,55,0.18)]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-6 px-0 py-10 md:grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr_1.1fr] lg:gap-8 lg:px-4"
              >
                <div className="text-3xl font-light tracking-[0.04em] text-[#D4AF37] sm:text-4xl">
                  {step.number}
                </div>

                <h3 className="text-xl font-light uppercase tracking-[0.04em] sm:text-2xl">
                  {step.title}
                </h3>

                <p className="leading-7 text-[#F3EEE7] sm:leading-8">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EEE7] px-5 py-16 text-[#2C1F1A] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
            Trusted Voices
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            What people are saying about the experience.
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {reviews.map((review) => (
              <div
                key={review.name + review.title}
                className="border border-[rgba(212,175,55,0.18)] bg-[#F8F4EE] px-6 py-8 sm:px-8 sm:py-10"
              >
                <p className="text-4xl leading-none text-[#C6A96B]">“</p>
                <p className="mt-5 leading-7 text-[#5B4636] sm:leading-8">{review.quote}</p>

                <div className="mt-8 border-t border-[rgba(212,175,55,0.18)] pt-5">
                  <p className="text-lg font-medium text-[#2C1F1A]">
                    {review.name}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
                    {review.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2C1F1A] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(212,175,55,0.18)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C6A96B]">
            Private Inquiry
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to experience a more intentional way to connect?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#F3EEE7] sm:text-lg sm:leading-8">
            Whether you are looking for one trusted service or a broader
            relationship with a curated network, PMP Inc is here to guide the
            introduction.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-none bg-[#D4AF37] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#2C1F1A] transition hover:bg-[#C6A96B] sm:px-10"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-[#D4AF37] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#F3EEE7] transition hover:bg-[#D4AF37] hover:text-[#2C1F1A] sm:px-10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}