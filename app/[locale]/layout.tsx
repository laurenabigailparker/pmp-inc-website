import Link from "next/link";
import Navbar from "../components/Navbar";

const localeCopy = {
  en: {
    footerBlurb:
      "Trusted connections, elevated services, and a more refined way to access the right support across lifestyle, design, home, business, and digital presence.",
    home: "Home",
    about: "About",
    network: "Network",
    services: "Services",
    contact: "Contact",
    rights: "© 2026 PMP Inc. All rights reserved.",
  },
  es: {
    footerBlurb:
      "Conexiones de confianza, servicios elevados y una forma más refinada de acceder al apoyo adecuado en estilo de vida, diseño, hogar, negocios y presencia digital.",
    home: "Inicio",
    about: "Sobre Nosotros",
    network: "Red",
    services: "Servicios",
    contact: "Contacto",
    rights: "© 2026 PMP Inc. Todos los derechos reservados.",
  },
  ru: {
    footerBlurb:
      "Надёжные связи, высокий уровень сервиса и более изысканный способ получить нужную поддержку в сфере образа жизни, дизайна, дома, бизнеса и цифрового присутствия.",
    home: "Главная",
    about: "О нас",
    network: "Сеть",
    services: "Услуги",
    contact: "Контакты",
    rights: "© 2026 PMP Inc. Все права защищены.",
  },
  ja: {
    footerBlurb:
      "信頼できるつながり、洗練されたサービス、そしてライフスタイル、デザイン、住まい、ビジネス、デジタルプレゼンスにおいて最適な支援へアクセスするための上質な方法をご提供します。",
    home: "ホーム",
    about: "会社情報",
    network: "ネットワーク",
    services: "サービス",
    contact: "お問い合わせ",
    rights: "© 2026 PMP Inc. All rights reserved.",
  },
} as const;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy =
    localeCopy[locale as keyof typeof localeCopy] ?? localeCopy.en;

  return (
    <>
      <Navbar locale={locale} />

      {children}

      <footer className="border-t border-[rgba(204,179,99,0.18)] bg-[#1E3226] text-[#F8EDC3]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p
                className="text-xl font-light uppercase tracking-[0.22em] sm:text-2xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                PMP Inc
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#F8EDC3]/85">
                {copy.footerBlurb}
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.2em] text-[#F8EDC3]/85 md:items-end">
              <Link href={`/${locale}`} className="transition hover:text-[#CCB363]">
                {copy.home}
              </Link>
              <Link href={`/${locale}/about`} className="transition hover:text-[#CCB363]">
                {copy.about}
              </Link>
              <Link href={`/${locale}/network`} className="transition hover:text-[#CCB363]">
                {copy.network}
              </Link>
              <Link href={`/${locale}/services`} className="transition hover:text-[#CCB363]">
                {copy.services}
              </Link>
              <Link href={`/${locale}/contact`} className="transition hover:text-[#CCB363]">
                {copy.contact}
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t border-[rgba(204,179,99,0.18)] pt-6 text-sm text-[#CCB363]">
            {copy.rights}
          </div>
        </div>
      </footer>
    </>
  );
}