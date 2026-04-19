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
    <header className="fixed top-0 left-0 z-[9999] w-full bg-red-600 text-white border-b-4 border-yellow-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${currentLocale}`} className="text-xl font-bold">
          PMP Inc
        </Link>

        <nav className="flex items-center gap-6 text-sm font-bold">
          <Link href={link("")}>Home</Link>
          <Link href={link("about")}>About</Link>
          <Link href={link("network")}>Network</Link>
          <Link href={link("services")}>Services</Link>
          <Link href={link("contact")}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3 rounded bg-black/30 px-3 py-2 text-sm font-bold">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={`/${lang}${rest ? `/${rest}` : ""}`}
              className={currentLocale === lang ? "text-yellow-300" : "text-white"}
            >
              {lang.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}