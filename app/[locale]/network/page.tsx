"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "../../components/Reveal";

const copy = {
  en: {
    eyebrow: "The Network",
    title: "A curated world of trusted connections.",
    intro:
      "This is not a random list of names. It is a thoughtfully built network of professionals, services, and trusted referrals designed to support real life, beautiful living, and high-level trust.",
    why: "Why This Hits Different",
    whyTitle:
      "It is not about knowing everyone. It is about knowing the right people.",
    why1:
      "A real network does more than offer options. It creates confidence. It saves time, removes noise, and gives clients a more intentional path forward.",
    why2:
      "That is what PMP Inc is building — a relationship-driven ecosystem where trust, taste, and quality shape every connection.",
    why3: "The result is a network that feels expansive, but never random.",
    ctaEyebrow: "Private Access",
    ctaTitle: "Need the right connection?",
    ctaText:
      "Tell us what you are looking for and we will help guide you toward the professionals, services, and support best aligned with your needs.",
    contact: "Contact Us",
    services: "View Services",
  },
  es: {
    eyebrow: "La Red",
    title: "Un mundo seleccionado de conexiones de confianza.",
    intro:
      "No es una lista aleatoria de nombres. Es una red cuidadosamente construida de profesionales, servicios y referencias confiables.",
    why: "Por Qué Se Siente Diferente",
    whyTitle:
      "No se trata de conocer a todos. Se trata de conocer a las personas correctas.",
    why1:
      "Una red real hace más que ofrecer opciones. Crea confianza, ahorra tiempo y elimina ruido.",
    why2:
      "Eso es lo que PMP Inc está construyendo: un ecosistema guiado por relaciones donde la confianza y la calidad definen cada conexión.",
    why3: "El resultado es una red amplia, pero nunca aleatoria.",
    ctaEyebrow: "Acceso Privado",
    ctaTitle: "¿Necesitas la conexión correcta?",
    ctaText:
      "Cuéntanos qué estás buscando y te guiaremos hacia los profesionales y servicios más alineados con tus necesidades.",
    contact: "Contáctanos",
    services: "Ver Servicios",
  },
  ru: {
    eyebrow: "Сеть",
    title: "Тщательно выстроенный мир надёжных связей.",
    intro:
      "Это не случайный список имён. Это продуманная сеть профессионалов, услуг и рекомендаций.",
    why: "Почему Это Ощущается Иначе",
    whyTitle:
      "Дело не в том, чтобы знать всех. Дело в том, чтобы знать нужных людей.",
    why1:
      "Настоящая сеть делает больше, чем просто даёт варианты. Она создаёт уверенность и экономит время.",
    why2:
      "Именно это строит PMP Inc — экосистему, где доверие и качество формируют каждую связь.",
    why3: "Результат — широкая сеть, но никогда не случайная.",
    ctaEyebrow: "Частный Доступ",
    ctaTitle: "Нужна правильная связь?",
    ctaText:
      "Расскажите, что вы ищете, и мы направим вас к специалистам и услугам, которые подходят лучше всего.",
    contact: "Связаться",
    services: "Посмотреть Услуги",
  },
  ja: {
    eyebrow: "ネットワーク",
    title: "信頼できるつながりを厳選した世界。",
    intro:
      "これは単なる名前の一覧ではありません。丁寧に築かれた専門家・サービス・紹介のネットワークです。",
    why: "違いを感じる理由",
    whyTitle:
      "大切なのは誰でも知っていることではなく、正しい人を知っていることです。",
    why1:
      "本当に価値あるネットワークは、選択肢を増やすだけではありません。安心感を生み出します。",
    why2:
      "それが PMP Inc が築いているものです。信頼と品質がすべてのつながりを形づくります。",
    why3: "その結果、広がりがありながらも決して雑ではないネットワークになります。",
    ctaEyebrow: "プライベートアクセス",
    ctaTitle: "必要なつながりをお探しですか？",
    ctaText:
      "お探しの内容をお聞かせいただければ、最適な専門家やサービスへご案内します。",
    contact: "お問い合わせ",
    services: "サービスを見る",
  },
} as const;

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

export default function NetworkPage({
  params,
}: {
  params: { locale: string };
}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const t = copy[params.locale as keyof typeof copy] ?? copy.en;

  const filters = ["All", "Design", "Lifestyle", "Home", "Business", "Wellness", "Specialty"];

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
    <main className="bg-[#1E3226] pt-24 text-[#F8EDC3]">
      <section className="bg-[#1E3226] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/85">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8 md:text-xl">
            {t.intro}
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
                    <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,50,38,0.52),rgba(248,237,195,0.04))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#F8EDC3]">{item.label}</p>
                    </div>
                  </div>

                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <h3 className="text-xl font-light uppercase tracking-[0.04em] text-[#F8EDC3] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 leading-7 text-[#F8EDC3]/90 sm:leading-8">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-5 py-16 text-[#1E3226] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">{t.why}</p>
          <h2 className="mt-6 text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {t.whyTitle}
          </h2>
          <div className="mt-8 space-y-6 text-base leading-7 text-[#1E3226]/82 sm:text-lg sm:leading-9">
            <p>{t.why1}</p>
            <p>{t.why2}</p>
            <p>{t.why3}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#76290B] px-5 py-16 text-[#F8EDC3] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(248,237,195,0.16)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/82">{t.ctaEyebrow}</p>
          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {t.ctaTitle}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8">
            {t.ctaText}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${params.locale}/contact`}
              className="inline-flex items-center justify-center bg-[#CCB363] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1E3226] transition hover:bg-[#F8EDC3]"
            >
              {t.contact}
            </Link>

            <Link
              href={`/${params.locale}/services`}
              className="inline-flex items-center justify-center border border-[rgba(248,237,195,0.24)] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#F8EDC3] transition hover:bg-[rgba(255,255,255,0.05)]"
            >
              {t.services}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}