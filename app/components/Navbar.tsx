"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLabels = {
  home: string;
  about: string;
  network: string;
  services: string;
  contact: string;
  language: string;
  current: string;
};

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
];

export default function Navbar({
  locale,
  labels,
}: {
  locale: string;
  labels: NavLabels;
}) {
  const pathname = usePathname();
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const restOfPath = segments.slice(1).join("/");

  const link = (path: string) => `/${locale}${path ? `/${path}` : ""}`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(204,179,99,0.15)] bg-[#1E3226]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="text-base uppercase tracking-[0.22em] text-[#F8EDC3] sm:text-lg sm:tracking-[0.25em]"
          >
            PMP Inc
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#F8EDC3]/85">
              <Link href={link("")}>{labels.home}</Link>
              <Link href={link("about")}>{labels.about}</Link>
              <Link href={link("network")}>{labels.network}</Link>
              <Link href={link("services")}>{labels.services}</Link>
              <Link href={link("contact")}>{labels.contact}</Link>
            </nav>

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenLanguage(!openLanguage)}
                className="inline-flex items-center gap-3 border border-[rgba(204,179,99,0.2)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#F8EDC3]"
              >
                <span>{labels.language}</span>
                <span className="text-[#CCB363]">{labels.current}</span>
                <span>{openLanguage ? "−" : "+"}</span>
              </button>

              {openLanguage && (
                <div className="absolute right-0 mt-3 min-w-[180px] border border-[rgba(204,179,99,0.18)] bg-[#1E3226] p-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}${restOfPath ? `/${restOfPath}` : ""}`}
                      onClick={() => setOpenLanguage(false)}
                      className={`block px-4 py-3 text-sm uppercase tracking-[0.18em] ${
                        locale === lang.code
                          ? "text-[#CCB363]"
                          : "text-[#F8EDC3]/85"
                      }`}
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenLanguage(!openLanguage)}
                className="inline-flex items-center gap-2 border border-[rgba(204,179,99,0.2)] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#F8EDC3]"
              >
                <span className="text-[#CCB363]">{labels.current}</span>
                <span>{openLanguage ? "−" : "+"}</span>
              </button>

              {openLanguage && (
                <div className="absolute right-0 mt-3 min-w-[160px] border border-[rgba(204,179,99,0.18)] bg-[#1E3226] p-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}${restOfPath ? `/${restOfPath}` : ""}`}
                      onClick={() => setOpenLanguage(false)}
                      className={`block px-4 py-3 text-sm uppercase tracking-[0.18em] ${
                        locale === lang.code
                          ? "text-[#CCB363]"
                          : "text-[#F8EDC3]/85"
                      }`}
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="inline-flex items-center justify-center border border-[rgba(204,179,99,0.2)] px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#F8EDC3]"
            >
              {openMobileMenu ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {openMobileMenu && (
          <div className="mt-4 border-t border-[rgba(204,179,99,0.15)] pt-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-[#F8EDC3]/90">
              <Link href={link("")} onClick={() => setOpenMobileMenu(false)}>
                {labels.home}
              </Link>
              <Link href={link("about")} onClick={() => setOpenMobileMenu(false)}>
                {labels.about}
              </Link>
              <Link href={link("network")} onClick={() => setOpenMobileMenu(false)}>
                {labels.network}
              </Link>
              <Link href={link("services")} onClick={() => setOpenMobileMenu(false)}>
                {labels.services}
              </Link>
              <Link href={link("contact")} onClick={() => setOpenMobileMenu(false)}>
                {labels.contact}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}