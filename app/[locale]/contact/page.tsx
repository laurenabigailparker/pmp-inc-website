"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Let’s begin the conversation.",
    intro:
      "Share what you are looking for, what matters most, and the kind of support you want. We will respond with care, discretion, and intention.",
    formTitle: "Tell us what you need",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    service: "Area of Interest",
    message: "How can we support you?",
    button: "Submit Inquiry",
    note: "Refined support begins with the right first step.",
    options: [
      "Luxury Concierge",
      "Curated Referrals",
      "Design Support",
      "Private Lifestyle Support",
      "Digital Presence",
      "Other",
    ],
    supportText:
      "We welcome thoughtful inquiries and tailored requests. Share a few details below and we will follow up with a more curated next step.",
  },
  es: {
    eyebrow: "Contacto",
    title: "Comencemos la conversación.",
    intro:
      "Comparte lo que estás buscando, lo que más te importa y el tipo de apoyo que deseas. Responderemos con cuidado, discreción e intención.",
    formTitle: "Cuéntanos lo que necesitas",
    name: "Nombre Completo",
    email: "Correo Electrónico",
    phone: "Número de Teléfono",
    service: "Área de Interés",
    message: "¿Cómo podemos apoyarte?",
    button: "Enviar Consulta",
    note: "El apoyo refinado comienza con el primer paso correcto.",
    options: [
      "Conserjería de Lujo",
      "Referencias Seleccionadas",
      "Apoyo de Diseño",
      "Apoyo Privado de Estilo de Vida",
      "Presencia Digital",
      "Otro",
    ],
    supportText:
      "Recibimos consultas bien pensadas y solicitudes personalizadas. Comparte algunos detalles y te responderemos con un siguiente paso más seleccionado.",
  },
  ru: {
    eyebrow: "Контакты",
    title: "Давайте начнём разговор.",
    intro:
      "Расскажите, что вы ищете, что для вас важнее всего и какой уровень поддержки вам нужен. Мы ответим с вниманием, деликатностью и намерением.",
    formTitle: "Расскажите, что вам нужно",
    name: "Полное Имя",
    email: "Email",
    phone: "Номер Телефона",
    service: "Сфера Интереса",
    message: "Чем мы можем помочь?",
    button: "Отправить Запрос",
    note: "Изысканная поддержка начинается с правильного первого шага.",
    options: [
      "Премиум Concierge",
      "Подобранные Рекомендации",
      "Дизайн-Поддержка",
      "Частная Lifestyle Поддержка",
      "Цифровое Присутствие",
      "Другое",
    ],
    supportText:
      "Мы приветствуем продуманные обращения и индивидуальные запросы. Поделитесь деталями, и мы предложим вам наиболее подходящий следующий шаг.",
  },
  ja: {
    eyebrow: "お問い合わせ",
    title: "まずはご相談から。",
    intro:
      "お探しの内容、大切にしていること、そして必要なサポートの形をお聞かせください。丁寧に、配慮をもってご案内します。",
    formTitle: "ご希望をお聞かせください",
    name: "お名前",
    email: "メールアドレス",
    phone: "電話番号",
    service: "ご関心のある内容",
    message: "どのようにサポートできますか？",
    button: "送信する",
    note: "上質なサポートは、正しい最初の一歩から始まります。",
    options: [
      "ラグジュアリーコンシェルジュ",
      "厳選紹介サービス",
      "デザインサポート",
      "プライベートライフスタイルサポート",
      "デジタルプレゼンス",
      "その他",
    ],
    supportText:
      "丁寧なご相談やご要望を歓迎しております。いくつか詳細をご記入いただければ、最適な次のステップをご案内いたします。",
  },
} as const;

export default function ContactPage() {
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

  const [selected, setSelected] = useState<string>(t.options[0]);

  return (
    <main className="bg-[#76290B] pt-24 text-[#F8EDC3]">
      <section className="px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F8EDC3]/80">
            {t.eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-light uppercase leading-[1.03] tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            {t.title}
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#F8EDC3]/88 sm:text-lg">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="bg-[#F8EDC3] px-6 py-16 text-[#1E3226] md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:pt-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C27E35]">
              PMP Inc
            </p>

            <h2 className="mt-6 text-3xl font-light uppercase leading-[1.08] tracking-[0.04em] sm:text-4xl md:text-5xl">
              {t.formTitle}
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-[#1E3226]/80">
              {t.note}
            </p>

            <div className="mt-10 h-px w-24 bg-[#C27E35]/50" />

            <p className="mt-10 max-w-sm text-sm leading-7 text-[#1E3226]/65">
              {t.supportText}
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#1E3226]/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(30,50,38,0.08)] backdrop-blur-sm sm:p-8 md:p-10">
            <form
              action="https://formspree.io/f/meevrgdn"
              method="POST"
              className="grid gap-6"
            >
              <input type="hidden" name="_subject" value="New PMP Inquiry" />
              <input
                type="hidden"
                name="_redirect"
                value={`https://pmpincprofessionals.com/${locale}/thank-you`}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#6B4C38]">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-full border border-[rgba(30,50,38,0.12)] bg-white px-5 py-4 text-sm text-[#1E3226] outline-none transition duration-300 placeholder:text-[#1E3226]/35 focus:border-[#C27E35] focus:ring-2 focus:ring-[#C27E35]/20"
                    placeholder={t.name}
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#6B4C38]">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-full border border-[rgba(30,50,38,0.12)] bg-white px-5 py-4 text-sm text-[#1E3226] outline-none transition duration-300 placeholder:text-[#1E3226]/35 focus:border-[#C27E35] focus:ring-2 focus:ring-[#C27E35]/20"
                    placeholder={t.email}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#6B4C38]">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-full border border-[rgba(30,50,38,0.12)] bg-white px-5 py-4 text-sm text-[#1E3226] outline-none transition duration-300 placeholder:text-[#1E3226]/35 focus:border-[#C27E35] focus:ring-2 focus:ring-[#C27E35]/20"
                    placeholder={t.phone}
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#6B4C38]">
                    {t.service}
                  </label>
                  <select
                    name="service"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="w-full appearance-none rounded-full border border-[rgba(30,50,38,0.12)] bg-white px-5 py-4 text-sm text-[#1E3226] outline-none transition duration-300 focus:border-[#C27E35] focus:ring-2 focus:ring-[#C27E35]/20"
                  >
                    {t.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.22em] text-[#6B4C38]">
                  {t.message}
                </label>
                <textarea
                  name="message"
                  rows={7}
                  required
                  className="w-full rounded-[1.75rem] border border-[rgba(30,50,38,0.12)] bg-white px-5 py-5 text-sm text-[#1E3226] outline-none transition duration-300 placeholder:text-[#1E3226]/35 focus:border-[#C27E35] focus:ring-2 focus:ring-[#C27E35]/20"
                  placeholder={t.message}
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1E3226]/45">
                  Elegant support. Intentional next steps.
                </p>

                <button
                  type="submit"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#1E3226] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#F8EDC3] transition duration-300 hover:-translate-y-0.5 hover:bg-[#CCB363] hover:text-[#1E3226]"
                >
                  {t.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}