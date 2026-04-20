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
      "This is not a random list. It is a thoughtfully built network of professionals and services.",
    filters: {
      all: "All",
      design: "Design",
      lifestyle: "Lifestyle",
      home: "Home",
      business: "Business",
      wellness: "Wellness",
      specialty: "Specialty",
    },
    ctaTitle: "Ready to connect?",
    contact: "Contact Us",
    services: "View Services",
    items: [
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
    ] as NetworkItem[],
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
    ctaTitle: "¿Lista para conectar?",
    contact: "Contáctanos",
    services: "Ver Servicios",
    items: [
      {
        title: "Interiores de Lujo",
        category: "Design",
        label: "Diseño",
        image: "/images/design.jpg",
        text: "Apoyo y dirección refinada para interiores.",
      },
      {
        title: "Cuidado de la Piel y Belleza",
        category: "Lifestyle",
        label: "Estilo de Vida",
        image: "/images/skincare.jpg",
        text: "Servicios de belleza y cuidado personal cuidadosamente seleccionados.",
      },
      {
        title: "Especialistas en Techos",
        category: "Home",
        label: "Hogar",
        image: "/images/home.jpg",
        text: "Profesionales confiables para el hogar.",
      },
      {
        title: "Contabilidad y Finanzas",
        category: "Business",
        label: "Negocios",
        image: "/images/business.jpg",
        text: "Profesionales financieros de confianza.",
      },
      {
        title: "Apoyo de Bienestar",
        category: "Wellness",
        label: "Bienestar",
        image: "/images/wellness.jpg",
        text: "Apoyo para una vida mejor y más equilibrada.",
      },
      {
        title: "Concierge Privado",
        category: "Specialty",
        label: "Especialidad",
        image: "/images/specialty.jpg",
        text: "Apoyo seleccionado y de alto nivel.",
      },
    ] as NetworkItem[],
  },

  ru: {
    eyebrow: "Сеть",
    title: "Тщательно выстроенный мир надёжных связей.",
    intro: "Это не случайный список. Это продуманная сеть профессионалов и услуг.",
    filters: {
      all: "Все",
      design: "Дизайн",
      lifestyle: "Образ Жизни",
      home: "Дом",
      business: "Бизнес",
      wellness: "Благополучие",
      specialty: "Специальное",
    },
    ctaTitle: "Готовы установить связь?",
    contact: "Связаться",
    services: "Услуги",
    items: [
      {
        title: "Премиальные Интерьеры",
        category: "Design",
        label: "Дизайн",
        image: "/images/design.jpg",
        text: "Изысканная поддержка и направление для интерьеров.",
      },
      {
        title: "Уход за Кожей и Красота",
        category: "Lifestyle",
        label: "Образ Жизни",
        image: "/images/skincare.jpg",
        text: "Тщательно подобранные beauty и personal care сервисы.",
      },
      {
        title: "Специалисты по Кровле",
        category: "Home",
        label: "Дом",
        image: "/images/home.jpg",
        text: "Надёжные специалисты для дома.",
      },
      {
        title: "Бухгалтерия и Финансы",
        category: "Business",
        label: "Бизнес",
        image: "/images/business.jpg",
        text: "Надёжные финансовые специалисты.",
      },
      {
        title: "Wellness Поддержка",
        category: "Wellness",
        label: "Благополучие",
        image: "/images/wellness.jpg",
        text: "Поддержка для лучшей жизни и баланса.",
      },
      {
        title: "Частный Concierge",
        category: "Specialty",
        label: "Специальное",
        image: "/images/specialty.jpg",
        text: "Премиальная тщательно подобранная поддержка.",
      },
    ] as NetworkItem[],
  },

  ja: {
    eyebrow: "ネットワーク",
    title: "信頼できるつながりを厳選した世界。",
    intro: "単なるリストではなく、厳選された専門家とサービスのネットワークです。",
    filters: {
      all: "すべて",
      design: "デザイン",
      lifestyle: "ライフスタイル",
      home: "住まい",
      business: "ビジネス",
      wellness: "ウェルネス",
      specialty: "特別",
    },
    ctaTitle: "つながる準備はできましたか？",
    contact: "お問い合わせ",
    services: "サービス",
    items: [
      {
        title: "ラグジュアリーインテリア",
        category: "Design",
        label: "デザイン",
        image: "/images/design.jpg",
        text: "洗練されたインテリアのための上質なサポートと方向性。",
      },
      {
        title: "スキンケア & ビューティー",
        category: "Lifestyle",
        label: "ライフスタイル",
        image: "/images/skincare.jpg",
        text: "厳選された美容とパーソナルケアのサービス。",
      },
      {
        title: "屋根工事の専門家",
        category: "Home",
        label: "住まい",
        image: "/images/home.jpg",
        text: "信頼できる住まいの専門家。",
      },
      {
        title: "会計 & 財務",
        category: "Business",
        label: "ビジネス",
        image: "/images/business.jpg",
        text: "信頼できる財務の専門家。",
      },
      {
        title: "ウェルネスサポート",
        category: "Wellness",
        label: "ウェルネス",
        image: "/images/wellness.jpg",
        text: "より良い暮らしとバランスのためのサポート。",
      },
      {
        title: "プライベート Concierge",
        category: "Specialty",
        label: "特別",
        image: "/images/specialty.jpg",
        text: "ハイタッチで厳選されたサポート。",
      },
    ] as NetworkItem[],
  },
} as const;

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
    if (activeFilter === "All") return t.items;
    return t.items.filter((item) => item.category === activeFilter);
  }, [activeFilter, t.items]);

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
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
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
        <h2 className="text-3xl uppercase">{t.ctaTitle}</h2>

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