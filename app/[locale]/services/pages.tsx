import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import { services } from "../../data/services";

const copy = {
  en: {
    eyebrow: "Services",
    title: "Curated support, refined execution.",
    intro:
      "Explore a more elevated way to access support, strategy, and trusted connections designed to move your vision forward.",
    offer: "What We Offer",
    offerTitle: "Services designed to feel intentional, polished, and high-touch.",
    view: "View Details",
    next: "Next Step",
    nextTitle: "Ready to explore the right support?",
    nextText:
      "Whether you are looking for design support, referrals, concierge help, or a stronger digital presence, we can help you find the next aligned move.",
    contact: "Contact Us",
    home: "Back Home",
  },
  es: {
    eyebrow: "Servicios",
    title: "Apoyo seleccionado, ejecución refinada.",
    intro:
      "Explora una forma más elevada de acceder al apoyo, la estrategia y las conexiones de confianza.",
    offer: "Lo Que Ofrecemos",
    offerTitle: "Servicios pensados para sentirse intencionales, pulidos y de alto nivel.",
    view: "Ver Detalles",
    next: "Siguiente Paso",
    nextTitle: "¿Lista para encontrar el apoyo correcto?",
    nextText:
      "Ya sea que busques apoyo de diseño, referencias, concierge o una presencia digital más fuerte, podemos ayudarte a encontrar el siguiente movimiento alineado.",
    contact: "Contáctanos",
    home: "Volver al Inicio",
  },
  ru: {
    eyebrow: "Услуги",
    title: "Тщательно подобранная поддержка и изысканное исполнение.",
    intro:
      "Откройте для себя более высокий уровень доступа к поддержке, стратегии и надёжным связям.",
    offer: "Что Мы Предлагаем",
    offerTitle: "Услуги, которые ощущаются осознанно, изящно и на высоком уровне.",
    view: "Подробнее",
    next: "Следующий Шаг",
    nextTitle: "Готовы найти правильную поддержку?",
    nextText:
      "Нужна ли вам помощь с дизайном, рекомендациями, concierge или усилением цифрового присутствия — мы поможем найти следующий правильный шаг.",
    contact: "Связаться",
    home: "Назад Домой",
  },
  ja: {
    eyebrow: "サービス",
    title: "厳選されたサポート、洗練された実行。",
    intro:
      "サポート、戦略、信頼できるつながりへ、より上質なかたちでアクセスできます。",
    offer: "ご提供内容",
    offerTitle: "意図的で洗練され、上質に感じられるサービス。",
    view: "詳細を見る",
    next: "次のステップ",
    nextTitle: "必要なサポートを見つける準備はできましたか？",
    nextText:
      "デザイン支援、紹介、コンシェルジュ、デジタルプレゼンス強化など、次の最適な一歩を一緒に見つけます。",
    contact: "お問い合わせ",
    home: "ホームへ戻る",
  },
} as const;

const imageMap: Record<string, string> = {
  "luxury-concierge": "/images/concierge.jpg",
  "curated-referrals": "/images/referrals.jpg",
  "design-support": "/images/design-support.jpg",
  "private-lifestyle-support": "/images/lifestyle-new.jpg",
  "digital-presence": "/images/web-design.jpg",
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = copy[locale as keyof typeof copy] ?? copy.en;

  return (
    <main className="bg-[#5b4636] pt-24 text-[#f3eee7]">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[78svh]">
        <Image
          src="/images/services-hero.jpg"
          alt="PMP Inc Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,70,54,0.4),rgba(91,70,54,0.85))]" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-16 sm:min-h-[78svh] sm:px-6 md:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d8c5b5]">{t.eyebrow}</p>
            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8 md:text-xl">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3eee7] px-5 py-16 text-[#5b4636] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#9a7b67]">{t.offer}</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {t.offerTitle}
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 120}>
                <div className="group flex h-full flex-col overflow-hidden border border-[rgba(91,70,54,0.12)] bg-[#f8f3ed] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={imageMap[service.slug] ?? "/images/services-hero.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-6 py-8 sm:px-8 sm:py-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9a7b67]">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-5 text-2xl font-light uppercase tracking-[0.04em] text-[#5b4636]">
                      {service.title}
                    </h3>

                    <p className="mt-5 flex-1 leading-7 text-[#6b5647] sm:leading-8">
                      {service.heroText}
                    </p>

                    <div className="mt-8">
                      <Link
                        href={`/${locale}/services/${service.slug}`}
                        className="inline-flex items-center justify-center border border-[#5b4636] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#5b4636] transition hover:bg-[#5b4636] hover:text-[#f3eee7]"
                      >
                        {t.view}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5b4636] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl border border-[rgba(243,238,231,0.12)] px-6 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d8c5b5]">{t.next}</p>
          <h2 className="mt-6 max-w-3xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {t.nextTitle}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#efe7dd] sm:text-lg sm:leading-8">
            {t.nextText}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center bg-[#f3eee7] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#5b4636] transition hover:bg-[#e9dfd4] sm:px-10"
            >
              {t.contact}
            </Link>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center border border-[#f3eee7] px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-[#f3eee7] transition hover:bg-[#f3eee7] hover:text-[#5b4636] sm:px-10"
            >
              {t.home}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}