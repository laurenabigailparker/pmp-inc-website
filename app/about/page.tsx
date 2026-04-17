"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../components/Reveal";

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const pillars = [
    {
      title: "Trust First",
      text: "Everything begins with confidence in who you are working with. We believe trust should never feel optional.",
    },
    {
      title: "Curated Quality",
      text: "We are selective by design. Every connection is meant to feel aligned, elevated, and worth your time.",
    },
    {
      title: "Beautiful Living",
      text: "With Gateway as our design arm, the way something feels matters just as much as how well it functions.",
    },
    {
      title: "Personal Experience",
      text: "We want every interaction to feel thoughtful, polished, and genuinely tailored to the person behind the request.",
    },
  ];

  const faqs = [
    {
      question: "What is PMP Inc at its core?",
      answer:
        "PMP Inc is a luxury concierge and curated connection brand. We help clients access trusted professionals, refined services, and intentional support across lifestyle, design, home, business, and digital presence.",
    },
    {
      question: "How is this different from a normal referral list?",
      answer:
        "A normal list gives you names. We focus on alignment, trust, presentation, and quality so the connection feels right, not random.",
    },
    {
      question: "What role does Gateway play?",
      answer:
        "Gateway is our design arm. It brings a strong visual and environmental point of view into the brand, shaping how we think about beauty, lifestyle, and elevated experiences.",
    },
    {
      question: "Who is PMP Inc for?",
      answer:
        "It is for clients who value trust, refinement, ease, and having one elevated source for carefully chosen connections.",
    },
  ];

  return (
    <main className="bg-[#5b4636] text-[#f3eee7]">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[78svh]">
        <Image
          src="/images/about-new.jpg"
          alt="About PMP Inc"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,70,54,0.45),rgba(91,70,54,0.82))]" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-16 sm:min-h-[78svh] sm:px-6 md:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">
              About The Brand
            </p>

            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Built for people who want more than just a recommendation.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8 md:text-xl">
              PMP Inc was created to make trusted connections feel more refined,
              more personal, and far more intentional from the very beginning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-5 py-16 text-[#5b4636] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              Our Story
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              One trusted source. Many beautifully aligned possibilities.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-[#6b5647] sm:text-lg sm:leading-9">
            <p>
              We built PMP Inc around a simple idea: life becomes easier when
              you know exactly who to trust. Instead of chasing referrals,
              second-guessing choices, or sorting through endless options, our
              clients can come to one place for intentional, curated support.
            </p>

            <p>
              From design and lifestyle services to home professionals and
              business expertise, the experience is meant to feel seamless,
              high-touch, and quietly luxurious.
            </p>

            <p>
              This brand is about more than access. It is about taste, care,
              trust, and the confidence that comes from being connected well.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            What Defines Us
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            The pillars behind the experience.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="h-full bg-[#5b4636] px-6 py-10 transition hover:bg-[#675140] sm:px-8 sm:py-12">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#d8c5b5]">
                    Brand Pillar
                  </p>
                  <h3 className="mt-5 text-xl font-light uppercase tracking-[0.04em] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-7 text-[#efe7dd] sm:leading-8">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-5 py-16 text-[#5b4636] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
          <div className="group relative min-h-[340px] overflow-hidden border border-[rgba(91,70,54,0.12)] sm:min-h-[420px] lg:min-h-[560px]">
            <Image
              src="/images/about-detail.jpg"
              alt="Luxury concierge support"
              fill
              className="object-cover transition duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(91,70,54,0.22),rgba(243,238,231,0.04))]" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b67]">
              Why People Remember Us
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              Because the experience feels different.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-7 text-[#6b5647] sm:text-lg sm:leading-9">
              <p>
                People remember PMP Inc because the standard feels clear.
                Everything is more intentional. More refined. More considered.
              </p>

              <p>
                We care about the quality of the connection, but also the feeling
                around it. That balance of trust, polish, and personal care is
                what gives the brand its lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">
            Frequently Asked
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            A closer look at how we think.
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border border-[rgba(243,238,231,0.12)] bg-[rgba(255,255,255,0.03)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="pr-6 text-base uppercase tracking-[0.03em] sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-[#d8c5b5]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 leading-7 text-[#efe7dd] sm:px-6 sm:pb-6 sm:leading-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}