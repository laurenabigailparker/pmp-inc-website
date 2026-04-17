import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PMP Inc",
  description: "Luxury concierge and trusted referral network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Navbar />

        <div style={{ fontFamily: "var(--font-montserrat)" }}>{children}</div>

        <footer className="border-t border-[rgba(243,238,231,0.12)] bg-[#5b4636] text-[#f3eee7]">
          <div className="mx-auto max-w-7xl px-8 py-16 md:px-12 lg:px-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p
                  className="text-2xl font-light uppercase tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  PMP Inc
                </p>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#e6d5c7]">
                  Trusted connections, elevated services, and a more refined way
                  to access the right support across lifestyle, design, home,
                  and business.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-[#e6d5c7] md:items-end">
                <Link href="/" className="transition hover:opacity-70">
                  Home
                </Link>
                <Link href="/about" className="transition hover:opacity-70">
                  About
                </Link>
                <Link href="/network" className="transition hover:opacity-70">
                  Network
                </Link>

                <Link href="/services" className="transition hover:opacity-70">
  Services
</Link>
                <Link href="/contact" className="transition hover:opacity-70">
                  Contact
                </Link>
              </div>
            </div>

            <div className="mt-16 border-t border-[rgba(243,238,231,0.12)] pt-6 text-sm text-[#cbb7a6]">
              © 2026 PMP Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}