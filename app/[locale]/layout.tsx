import Link from "next/link";
import Navbar from "../components/Navbar";
import { getMessages } from "../../lib/getMessages";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getMessages(locale as "en" | "es" | "ru" | "ja");

  return (
    <>
      <Navbar locale={locale} labels={t.nav} />

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
                {t.footer?.blurb ??
                  "Trusted connections, elevated services, and a more refined way to access the right support across lifestyle, design, home, business, and digital presence."}
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.2em] text-[#F8EDC3]/85 md:items-end">
              <Link href={`/${locale}`}>{t.nav?.home ?? "Home"}</Link>
              <Link href={`/${locale}/about`}>{t.nav?.about ?? "About"}</Link>
              <Link href={`/${locale}/network`}>{t.nav?.network ?? "Network"}</Link>
              <Link href={`/${locale}/services`}>{t.nav?.services ?? "Services"}</Link>
              <Link href={`/${locale}/contact`}>{t.nav?.contact ?? "Contact"}</Link>
            </div>
          </div>

          <div className="mt-12 border-t border-[rgba(204,179,99,0.18)] pt-6 text-sm text-[#CCB363]">
            {t.footer?.rights ?? "© 2026 PMP Inc. All rights reserved."}
          </div>
        </div>
      </footer>
    </>
  );
}