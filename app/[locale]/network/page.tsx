"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Reveal from "../../components/Reveal";

type NetworkItem = {
  title: string;
  category: string;
  label: string;
  image: string;
  text: string;
};

const copy = {
  en: {
    eyebrow: "The Network",
    title: "A curated world of trusted connections.",
    intro:
      "This is not a random list of names. It is a thoughtfully built network of professionals, services, and trusted referrals designed to support real life, beautiful living, and high-level trust.",
    filters: {
      all: "All",
      design: "Design",
      lifestyle: "Lifestyle",
      home: "Home",
      business: "Business",
      wellness: "Wellness",
      specialty: "Specialty",
    },
    contact: "Contact Us",
    services: "View Services",
  },

  es: {
    eyebrow: "La Red",
    title: "Un mundo seleccionado de conexiones de confianza.",
    intro:
      "No es una lista aleatoria. Es una red cuidadosamente construida de profesionales y servicios.",
    filters: {
      all: "Todo",
      design: "Diseño",
      lifestyle: "Estilo de Vida",
      home: "Hogar",
      business: "Negocios",
      wellness: "Bienestar",
      specialty: "Especialidad",
    },
    contact: "Contáctanos",
    services: "Ver Servicios",
  },

  ru: {
    eyebrow: "Сеть",
    title: "Тщательно выстроенный мир надёжных связей.",
    intro: "Это не случайный список. Это продуманная сеть профессионалов.",
    filters: {
      all: "Все",
      design: "Дизайн",
      lifestyle: "Образ Жизни",
      home: "Дом",
      business: "Бизнес",
      wellness: "Благополучие",
      specialty: "Специальное",
    },
    contact: "Связаться",
    services: "Услуги",
  },

  ja: {
    eyebrow: "ネットワーク",
    title: "信頼できるつながりを厳選した世界。",
    intro: "単なるリストではなく、厳選されたネットワークです。",
    filters: {
      all: "すべて",
      design: "デザイン",
      lifestyle: "ライフスタイル",
      home: "住まい",
      business: "ビジネス",
      wellness: "ウェルネス",
      specialty: "特別",
    },
    contact: "お問い合わせ",
    services: "サービス",
  },
} as const;

const items: NetworkItem[] = [
  {
    title: "Luxury Interiors",
    category: "Design",
    label: "Design",
    image: "/images/design.jpg",
    text: "Refined interior support and direction.",
  },
  {
    title: "Skincare & Beauty",
    category: "Lifestyle",
    label: "Lifestyle",
    image: "/images/skincare.jpg",
    text: "Curated beauty and personal care services.",
  },
  {
    title: "Roofing Specialists",
    category: "Home",
    label: "Home",
    image: "/images/home.jpg",
    text: "Reliable home professionals.",
  },
  {
    title: "Accounting & Finance",
    category: "Business",
    label: "Business",
    image: "/images/business.jpg",
    text: "Trusted financial professionals.",
  },
  {
    title: "Wellness Support",
    category: "Wellness",
    label: "Wellness",
    image: "/images/wellness.jpg",
    text: "Support for better living and balance.",
  },
  {
    title: "Private Concierge",
    category: "Specialty",
    label: "Specialty",
    image: "/images/specialty.jpg",
    text: "High-touch curated support.",
  },
];

export default function NetworkPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const t =
    locale === "es"
      ? copy.es
      : locale === "ru"
      ? copy.ru
      : locale === "ja"
      ? copy.ja
      : copy.en;

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { key: "All", label: t.filters.all },
    { key: "Design", label: t.filters.design },
    { key: "Lifestyle", label: t.filters.lifestyle },
    { key: "Home", label: t.filters.home },
    { key: "Business", label: t.filters.business },
    { key: "Wellness", label: t.filters.wellness },
    { key: "Specialty", label: t.filters.specialty },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-[#1E3226] pt-24 text-[#F8EDC3]">
      <section className="px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em]">{t.eyebrow}</p>
        <h1 className="mt-6 text-4xl font-light uppercase">{t.title}</h1>
        <p className="mt-6 max-w-2xl text-[#F8EDC3]/80">{t.intro}</p>
      </section>

      <section className="bg-[#6F7D7B] px-6 py-12">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;

            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.2em] ${
                  isActive
                    ? "bg-[#CCB363] text-[#1E3226]"
                    : "border border-white/20"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item, i) => (
            <Reveal key={i}>
              <div className="border border-white/10">
                <div className="relative h-56">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl uppercase">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/80">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#76290B] px-6 py-16 text-center">
        <h2 className="text-3xl uppercase">Ready to connect?</h2>

        <div className="mt-6 flex justify-center gap-4">
          <Link href={`/${locale}/contact`} className="bg-[#CCB363] px-6 py-3">
            {t.contact}
          </Link>

          <Link
            href={`/${locale}/services`}
            className="border border-white/30 px-6 py-3"
          >
            {t.services}
          </Link>
        </div>
      </section>
    </main>
  );
}