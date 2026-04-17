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
    <main className="bg-[#5b4636] text-[#f3eee7]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/home-hero.jpg"
          alt="Luxury concierge lifestyle"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,70,54,0.45),rgba(91,70,54,0.82))]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-8 py-24 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#e6d5c7]">
              PMP Inc
            </p>

            <h1 className="mt-8 max-w-5xl text-5xl font-light uppercase leading-[1.05] tracking-[0.04em] md:text-7xl lg:text-8xl">
              Trusted connections for beautifully aligned living.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#efe7dd] md:text-xl">
              PMP Inc offers a more refined way to access trusted professionals,
              elevated services, intentional support, and digital presence
              across lifestyle, design, home, and business needs.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/network"
                className="inline-flex items-center justify-center rounded-none bg-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4]"
              >
                Explore The Network
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636]"
              >
                Private Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 border-y border-[rgba(243,238,231,0.14)] md:grid-cols-2 md:divide-x md:divide-y-0 md:border-y lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center border-b border-[rgba(243,238,231,0.14)] px-8 py-12 text-center transition hover:bg-[rgba(255,255,255,0.03)] md:border-b">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d8c5b5]">
                Trusted
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.08em]">
                Connections
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center border-b border-[rgba(243,238,231,0.14)] px-8 py-12 text-center transition hover:bg-[rgba(255,255,255,0.03)] md:border-b">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d8c5b5]">
                Elevated
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.08em]">
                Service
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center border-b border-[rgba(243,238,231,0.14)] px-8 py-12 text-center transition hover:bg-[rgba(255,255,255,0.03)] lg:border-b-0">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d8c5b5]">
                Curated
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.08em]">
                Solutions
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center px-8 py-12 text-center transition hover:bg-[rgba(255,255,255,0.03)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[#d8c5b5]">
                Private
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.08em]">
                Access
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-8 py-24 text-[#5b4636] md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              About PMP Inc
            </p>

            <h2 className="mt-8 max-w-xl text-4xl font-light uppercase leading-[1.1] tracking-[0.04em] md:text-6xl">
              One trusted source for a more refined experience.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-[#6b5647]">
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

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center border-b border-[#5b4636] pb-2 text-sm font-medium uppercase tracking-[0.22em] transition hover:opacity-70"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            What We Offer
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            A curated network shaped by trust, quality, and alignment.
          </h2>

          <div className="mt-20 grid gap-px bg-[rgba(243,238,231,0.12)] md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div
                key={item.title}
                className="group bg-[#5b4636] px-8 py-12 transition hover:bg-[#675140]"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#d8c5b5]">
                  Curated Service
                </p>
                <h3 className="mt-5 text-2xl font-light uppercase tracking-[0.04em]">
                  {item.title}
                </h3>
                <p className="mt-6 leading-8 text-[#efe7dd]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-8 py-24 text-[#5b4636] md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-24">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image
              src="/images/workspace.jpg"
              alt="Luxury concierge experience"
              fill
              className="object-cover transition duration-[2000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(91,70,54,0.12),rgba(243,238,231,0.03))]" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              Why Clients Come To Us
            </p>

            <h2 className="mt-8 max-w-xl text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
              Because trust changes everything.
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-[#6b5647]">
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

      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            The Process
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            Simple, considered, and intentionally high-touch.
          </h2>

          <div className="mt-20 divide-y divide-[rgba(243,238,231,0.12)] border-y border-[rgba(243,238,231,0.12)]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-8 px-2 py-12 md:grid-cols-[140px_1fr_1.1fr] md:px-6"
              >
                <div className="text-4xl font-light tracking-[0.04em] text-[#d8c5b5]">
                  {step.number}
                </div>

                <h3 className="text-2xl font-light uppercase tracking-[0.04em]">
                  {step.title}
                </h3>

                <p className="leading-8 text-[#efe7dd]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-8 py-24 text-[#5b4636] md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
            Trusted Voices
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            What people are saying about the experience.
          </h2>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name + review.title}
                className="border border-[rgba(91,70,54,0.12)] bg-[#f8f4ee] px-8 py-10"
              >
                <p className="text-4xl leading-none text-[#9a7b67]">“</p>
                <p className="mt-5 leading-8 text-[#6b5647]">{review.quote}</p>

                <div className="mt-10 border-t border-[rgba(91,70,54,0.12)] pt-6">
                  <p className="text-lg font-medium text-[#5b4636]">
                    {review.name}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#9a7b67]">
                    {review.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-8 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl border border-[rgba(243,238,231,0.12)] px-8 py-16 md:px-14 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            Private Inquiry
          </p>

          <h2 className="mt-8 max-w-3xl text-4xl font-light uppercase leading-[1.12] tracking-[0.04em] md:text-6xl">
            Ready to experience a more intentional way to connect?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#efe7dd]">
            Whether you are looking for one trusted service or a broader
            relationship with a curated network, PMP Inc is here to guide the
            introduction.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-none bg-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4]"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-[#f3eee7] px-10 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}