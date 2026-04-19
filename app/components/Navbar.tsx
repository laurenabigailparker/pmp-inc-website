"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const navCopy = {
  en: {
    home: "Home",
    about: "About",
    network: "Network",
    services: "Services",
    contact: "Contact",
    language: "Language",
    current: "English",
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    network: "Red",
    services: "Servicios",
    contact: "Contacto",
    language: "Idioma",
    current: "Español",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    network: "Сеть",
    services: "Услуги",
    contact: "Контакты",
    language: "Язык",
    current: "Русский",
  },
  ja: {
    home: "ホーム",
    about: "会社情報",
    network: "ネットワーク",
    services: "サービス",
    contact: "お問い合わせ",
    language: "言語",
    current: "日本語",
  },
} as const;

const languageOptions = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
];

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const copy = navCopy[locale as keyof typeof navCopy] ?? navCopy.en;

  const currentPathWithoutLocale = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.slice(1).join("/");
  }, [pathname]);

  const link = (path: string) => `/${locale}${path ? `/${path}` : ""}`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(204,179,99,0.15)] bg-[#1E3226]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="text-lg uppercase tracking-[0.25em] text-[#F8EDC3]"
        >
          PMP Inc
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#F8EDC3]/85 md:flex">
            <Link href={link("")} className="hover:text-[#CCB363]">
              {copy.home}
            </Link>
            <Link href={link("about")} className="hover:text-[#CCB363]">
              {copy.about}
            </Link>
            <Link href={link("network")} className="hover:text-[#CCB363]">
              {copy.network}
            </Link>
            <Link href={link("services")} className="hover:text-[#CCB363]">
              {copy.services}
            </Link>
            <Link href={link("contact")} className="hover:text-[#CCB363]">
              {copy.contact}
            </Link>
          </nav>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center gap-3 border border-[rgba(204,179,99,0.2)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#F8EDC3] transition hover:border-[#CCB363] hover:text-[#CCB363]"
            >
              <span>{copy.language}</span>
              <span className="text-[#CCB363]">{copy.current}</span>
              <span>{open ? "−" : "+"}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 min-w-[180px] border border-[rgba(204,179,99,0.18)] bg-[#1E3226] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
                {languageOptions.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}${currentPathWithoutLocale ? `/${currentPathWithoutLocale}` : ""}`}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 text-sm uppercase tracking-[0.18em] transition ${
                      locale === lang.code
                        ? "text-[#CCB363]"
                        : "text-[#F8EDC3]/85 hover:bg-[rgba(255,255,255,0.04)] hover:text-[#CCB363]"
                    }`}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}