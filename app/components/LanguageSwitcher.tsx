"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = ["en", "es", "ru", "ja"];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] || "en";

  const rest = segments.slice(1).join("/");

  return (
    <div className="flex gap-3 text-sm uppercase tracking-[0.2em]">
      {languages.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${rest ? `/${rest}` : ""}`}
          className={
            currentLocale === lang
              ? "text-[#CCB363]"
              : "text-[#F8EDC3]/70 hover:text-[#CCB363]"
          }
        >
          {lang}
        </Link>
      ))}
    </div>
  );
}