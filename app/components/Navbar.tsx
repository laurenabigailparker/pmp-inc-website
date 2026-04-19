"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = ["en", "es", "ru", "ja"];

export default function Navbar() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] || "en";
  const rest = segments.slice(1).join("/");

  const link = (path: string) =>
    `/${currentLocale}${path ? `/${path}` : ""}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1E3226]/90 backdrop-blur-md border-b border-[rgba(204,179,99,0.15)]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href={`/${currentLocale}`}
          className="text-lg uppercase tracking-[0.25em] text-[#F8EDC3]"
        >
          PMP Inc
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#F8EDC3]/85">
          <Link href={link("")} className="hover:text-[#CCB363]">
            Home
          </Link>
          <Link href={link("about")} className="hover:text-[#CCB363]">
            About
          </Link>
          <Link href={link("network")} className="hover:text-[#CCB363]">
            Network
          </Link>
          <Link href={link("services")} className="hover:text-[#CCB363]">
            Services
          </Link>
          <Link href={link("contact")} className="hover:text-[#CCB363]">
            Contact
          </Link>
        </nav>

        {/* LANGUAGE SWITCHER */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={`/${lang}${rest ? `/${rest}` : ""}`}
              className={
                currentLocale === lang
                  ? "text-[#CCB363]"
                  : "text-[#F8EDC3]/60 hover:text-[#CCB363]"
              }
            >
              {lang}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}