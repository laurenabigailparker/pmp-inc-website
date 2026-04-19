"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";

type NetworkItem = {
  title: string;
  category: string;
  label: string;
  image: string;
  text: string;
};

const networkItems: NetworkItem[] = [
  {
    title: "Luxury Interiors",
    category: "Design",
    label: "Design & Interiors",
    image: "/images/design.jpg",
    text: "Thoughtful, elevated support for spaces that feel intentional, polished, and beautifully aligned.",
  },
  {
    title: "Home Staging",
    category: "Design",
    label: "Design & Interiors",
    image: "/images/design.jpg",
    text: "Presentation-focused styling that helps interiors feel refined, inviting, and market-ready.",
  },
  {
    title: "Skincare & Beauty",
    category: "Lifestyle",
    label: "Lifestyle & Beauty",
    image: "/images/skincare.jpg",
    text: "Curated personal care and beauty services chosen to support confidence, wellness, and ease.",
  },
  {
    title: "Private Lifestyle Support",
    category: "Lifestyle",
    label: "Lifestyle & Beauty",
    image: "/images/lifestyle.jpg",
    text: "Personalized services that fit the rhythm of modern life with a more elevated touch.",
  },
  {
    title: "Roofing Specialists",
    category: "Home",
    label: "Home Professionals",
    image: "/images/home.jpg",
    text: "Reliable professionals selected for strong workmanship, responsiveness, and trust.",
  },
  {
    title: "Plumbing Experts",
    category: "Home",
    label: "Home Professionals",
    image: "/images/home.jpg",
    text: "Professionals who bring reliability, skill, and peace of mind to essential home needs.",
  },
  {
    title: "Electrical Professionals",
    category: "Home",
    label: "Home Professionals",
    image: "/images/home.jpg",
    text: "Trusted specialists chosen for professionalism, precision, and dependable service.",
  },
  {
    title: "Accounting & Finance",
    category: "Business",
    label: "Business & Legal",
    image: "/images/business.jpg",
    text: "Trusted experts who bring clarity, structure, and financial confidence to the table.",
  },
  {
    title: "Legal Guidance",
    category: "Business",
    label: "Business & Legal",
    image: "/images/business.jpg",
    text: "Respected attorneys and advisors selected for discretion, professionalism, and trusted support.",
  },
  {
    title: "Wellness Support",
    category: "Wellness",
    label: "Wellness & Personal Support",
    image: "/images/wellness.jpg",
    text: "Connections that support how clients feel, function, and move through life more intentionally.",
  },
  {
    title: "Specialty Referrals",
    category: "Specialty",
    label: "Specialty Access",
    image: "/images/specialty.jpg",
    text: "When clients need something specific, we help guide them toward aligned and carefully considered options.",
  },
  {
    title: "Private Concierge Guidance",
    category: "Specialty",
    label: "Specialty Access",
    image: "/images/specialty.jpg",
    text: "High-touch support designed to simplify the search and create a more seamless client experience.",
  },
];

export default function NetworkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Design",
    "Lifestyle",
    "Home",
    "Business",
    "Wellness",
    "Specialty",
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return networkItems;
    return networkItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const gridClasses =
    filteredItems.length === 1
      ? "grid-cols-1 max-w-xl"
      : filteredItems.length === 2
      ? "grid-cols-1 md:grid-cols-2 max-w-5xl"
      : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl";

  return (
    <main className="bg-[#1E3226] text-[#F8EDC3]">
      <section className="bg-[#1E3226] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/85">
            The Network
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            A curated world of trusted connections.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8 md:text-xl">
            This is not a random list of names. It is a thoughtfully built
            network of professionals, services, and trusted referrals designed
            to support real life, beautiful living, and high-level trust.
          </p>
        </div>
      </section>

      <section className="bg-[#6F7D7B] px-5 py-16 text-[#F8EDC3] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-3 text-xs uppercase tracking-[0.22em] transition sm:px-6 sm:text-sm ${
                    isActive
                      ? "bg-[#CCB363] text-[#1E3226]"
                      : "border border-[rgba(248,237,195,0.18)] bg-[rgba(255,255,255,0.04)] text-[#F8EDC3] hover:bg-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className={`mx-auto mt-12 grid gap-6 sm:gap-8 ${gridClasses}`}>
            {filteredItems.map((item, index) => (
              <Reveal key={`${item.category}-${item.title}`} delay={index * 120}>
                <div className="group overflow-hidden border border-[rgba(248,237,195,0.16)] bg-[#6F7D7B] transition duration-500 hover:-translate-y-1 hover:bg-[#7b8a88] hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                  <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px] md:h-[270px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,50,38,0.52),rgba(248,237,195,0.04))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#F8EDC3]">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <h3 className="text-xl font-light uppercase tracking-[0.04em] text-[#F8EDC3] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#F8EDC3]/90 sm:leading-8">
                      {item.text}
                    </p>

                    <div className="mt-8 flex items-center justify-between gap-3">
                      <span className="border border-[rgba(248,237,195,0.2)] px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-[#CCB363] sm:px-4 sm:text-xs">
                        {item.category}
                      </span>

                      <span className="text-[11px] uppercase tracking-[0.22em] text-[#F8EDC3]/80 opacity-0 transition duration-300 group-hover:opacity-100 sm:text-xs">
                        Trusted Access
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-5 py-16 text-[#1E3226] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
            Why This Hits Different
          </p>

          <h2 className="mt-6 text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            It is not about knowing everyone. It is about knowing the right people.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-[#1E3226]/82 sm:text-lg sm:leading-9">
            <p>
              A real network does more than offer options. It creates confidence.
              It saves time, removes noise, and gives clients a more intentional
              path forward.
            </p>

            <p>
              That is what PMP Inc is building — a relationship-driven ecosystem
              where trust, taste, and quality shape every connection.
            </p>

            <p>
              The result is a network that feels expansive, but never random.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#76290B] px-5 py-16 text-[#F8EDC3] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(248,237,195,0.16)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/82">
            Private Access
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            Need the right connection?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8">
            Tell us what you are looking for and we will help guide you toward
            the professionals, services, and support best aligned with your needs.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#CCB363] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#1E3226] transition hover:bg-[#F8EDC3] sm:px-10"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-[#CCB363] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#F8EDC3] transition hover:bg-[#CCB363] hover:text-[#1E3226] sm:px-10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}