"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../../components/Reveal";

const aboutCopy = {
  en: {
    eyebrow: "About The Brand",
    title: "Built for people who want more than just a recommendation.",
    intro:
      "PMP Inc was created to make trusted connections feel more refined, more personal, and far more intentional from the very beginning.",
    storyEyebrow: "Our Story",
    storyTitle: "One trusted source. Many beautifully aligned possibilities.",
    story1:
      "We built PMP Inc around a simple idea: life becomes easier when you know exactly who to trust. Instead of chasing referrals, second-guessing choices, or sorting through endless options, our clients can come to one place for intentional, curated support.",
    story2:
      "From design and lifestyle services to home professionals and business expertise, the experience is meant to feel seamless, high-touch, and quietly luxurious.",
    story3:
      "This brand is about more than access. It is about taste, care, trust, and the confidence that comes from being connected well.",
    defines: "What Defines Us",
    pillarsTitle: "The pillars behind the experience.",
    rememberEyebrow: "Why People Remember Us",
    rememberTitle: "Because the experience feels different.",
    remember1:
      "People remember PMP Inc because the standard feels clear. Everything is more intentional. More refined. More considered.",
    remember2:
      "We care about the quality of the connection, but also the feeling around it. That balance of trust, polish, and personal care is what gives the brand its lasting impression.",
    faqEyebrow: "Frequently Asked",
    faqTitle: "A closer look at how we think.",
  },
  es: {
    eyebrow: "Sobre la Marca",
    title: "Creado para quienes quieren más que una simple recomendación.",
    intro:
      "PMP Inc fue creada para que las conexiones de confianza se sientan más refinadas, más personales y mucho más intencionales desde el principio.",
    storyEyebrow: "Nuestra Historia",
    storyTitle: "Una fuente confiable. Muchas posibilidades bellamente alineadas.",
    story1:
      "Construimos PMP Inc sobre una idea simple: la vida se vuelve más fácil cuando sabes exactamente en quién confiar.",
    story2:
      "Desde servicios de diseño y estilo de vida hasta profesionales del hogar y experiencia empresarial, la experiencia está pensada para sentirse fluida, cercana y discretamente lujosa.",
    story3:
      "Esta marca es más que acceso. Se trata de gusto, cuidado, confianza y la seguridad que nace de estar bien conectada.",
    defines: "Lo Que Nos Define",
    pillarsTitle: "Los pilares detrás de la experiencia.",
    rememberEyebrow: "Por Qué Nos Recuerdan",
    rememberTitle: "Porque la experiencia se siente diferente.",
    remember1:
      "La gente recuerda PMP Inc porque el estándar se siente claro. Todo es más intencional. Más refinado. Más considerado.",
    remember2:
      "Nos importa la calidad de la conexión, pero también la sensación que la rodea.",
    faqEyebrow: "Preguntas Frecuentes",
    faqTitle: "Una mirada más cercana a nuestra forma de pensar.",
  },
  ru: {
    eyebrow: "О Бренде",
    title: "Создано для тех, кому нужно больше, чем просто рекомендация.",
    intro:
      "PMP Inc была создана, чтобы надёжные связи ощущались более изысканно, лично и осознанно с самого начала.",
    storyEyebrow: "Наша История",
    storyTitle: "Один надёжный источник. Множество красиво выстроенных возможностей.",
    story1:
      "Мы построили PMP Inc вокруг простой идеи: жизнь становится легче, когда вы точно знаете, кому доверять.",
    story2:
      "От дизайна и lifestyle-сервисов до специалистов для дома и бизнес-экспертизы — всё должно ощущаться легко, премиально и ненавязчиво роскошно.",
    story3:
      "Этот бренд — не просто про доступ. Это про вкус, заботу, доверие и уверенность, которая приходит с правильными связями.",
    defines: "Что Нас Определяет",
    pillarsTitle: "Принципы, стоящие за этим опытом.",
    rememberEyebrow: "Почему Нас Запоминают",
    rememberTitle: "Потому что этот опыт ощущается иначе.",
    remember1:
      "Люди запоминают PMP Inc, потому что стандарт здесь ощущается ясно. Всё более осознанно. Более изысканно. Более продуманно.",
    remember2:
      "Нам важны не только качество связи, но и то чувство, которое её сопровождает.",
    faqEyebrow: "Частые Вопросы",
    faqTitle: "Более близкий взгляд на то, как мы мыслим.",
  },
  ja: {
    eyebrow: "ブランドについて",
    title: "ただの紹介以上を求める方のために。",
    intro:
      "PMP Inc は、信頼できるつながりが最初からより洗練され、より個人的で、より意図的に感じられるように生まれました。",
    storyEyebrow: "私たちのストーリー",
    storyTitle: "ひとつの信頼できる窓口。美しく整った多くの可能性。",
    story1:
      "PMP Inc は、誰を信頼すべきかが明確だと人生はもっと楽になるというシンプルな考えから生まれました。",
    story2:
      "デザインやライフスタイル支援から住まいの専門家、ビジネス分野まで、体験全体が自然で上質に感じられるよう設計されています。",
    story3:
      "このブランドは単なるアクセスではありません。センス、配慮、信頼、そして正しくつながることで生まれる安心感です。",
    defines: "私たちを形づくるもの",
    pillarsTitle: "体験を支える柱。",
    rememberEyebrow: "記憶に残る理由",
    rememberTitle: "体験そのものが違うから。",
    remember1:
      "PMP Inc が記憶に残るのは、基準の高さがはっきりと伝わるからです。より意図的で、より洗練され、より丁寧です。",
    remember2:
      "私たちはつながりの質だけでなく、その周囲の感覚そのものも大切にしています。",
    faqEyebrow: "よくあるご質問",
    faqTitle: "私たちの考え方をもう少し詳しく。",
  },
} as const;

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const copy =
    aboutCopy[params.locale as keyof typeof aboutCopy] ?? aboutCopy.en;

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
    <main className="bg-[#1E3226] pt-24 text-[#F8EDC3]">
      <section className="relative min-h-[70svh] overflow-hidden sm:min-h-[78svh]">
        <Image
          src="/images/about-new.jpg"
          alt="About PMP Inc"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(111,125,123,0.2),rgba(30,50,38,0.9))]" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-16 sm:min-h-[78svh] sm:px-6 md:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8EDC3]/85">
              {copy.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              {copy.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#F8EDC3]/92 sm:text-lg sm:leading-8 md:text-xl">
              {copy.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-5 py-16 text-[#1E3226] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
              {copy.storyEyebrow}
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              {copy.storyTitle}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-7 text-[#1E3226]/82 sm:text-lg sm:leading-9">
            <p>{copy.story1}</p>
            <p>{copy.story2}</p>
            <p>{copy.story3}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#6F7D7B] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#F8EDC3]">
            {copy.defines}
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {copy.pillarsTitle}
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="h-full border border-[rgba(248,237,195,0.16)] bg-[#6F7D7B] px-6 py-10 transition hover:bg-[#7b8a88] sm:px-8 sm:py-12">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#CCB363]">
                    Brand Pillar
                  </p>
                  <h3 className="mt-5 text-xl font-light uppercase tracking-[0.04em] text-[#F8EDC3] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-7 text-[#F8EDC3]/92 sm:leading-8">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-5 py-16 text-[#1E3226] sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
          <div className="group relative min-h-[340px] overflow-hidden border border-[rgba(194,126,53,0.2)] sm:min-h-[420px] lg:min-h-[560px]">
            <Image
              src="/images/about-detail.jpg"
              alt="Luxury concierge support"
              fill
              className="object-cover transition duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,50,38,0.18),rgba(248,237,195,0.05))]" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
              {copy.rememberEyebrow}
            </p>
            <h2 className="mt-6 max-w-xl text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
              {copy.rememberTitle}
            </h2>

            <div className="mt-8 space-y-6 text-base leading-7 text-[#1E3226]/82 sm:text-lg sm:leading-9">
              <p>{copy.remember1}</p>
              <p>{copy.remember2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#76290B] px-5 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/82">
            {copy.faqEyebrow}
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-center text-3xl font-light uppercase leading-[1.1] tracking-[0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
            {copy.faqTitle}
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border border-[rgba(248,237,195,0.16)] bg-[rgba(255,255,255,0.03)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="pr-6 text-base uppercase tracking-[0.03em] sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-[#CCB363]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 leading-7 text-[#F8EDC3]/92 sm:px-6 sm:pb-6 sm:leading-8">
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