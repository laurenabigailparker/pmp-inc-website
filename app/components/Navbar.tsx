"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(243,238,231,0.12)] bg-[#5b4636]/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-[#5b4636]/78 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 md:px-12 lg:px-16">
        <Link
          href="/"
          className="group relative text-2xl font-light uppercase tracking-[0.25em] text-[#f3eee7] transition"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          PMP Inc
          <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav
          className="flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-[#f3eee7] md:gap-8 md:text-sm"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <Link href="/" className="group relative transition hover:text-[#e6d5c7]">
            Home
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/about" className="group relative transition hover:text-[#e6d5c7]">
            About
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/network" className="group relative transition hover:text-[#e6d5c7]">
            Network
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/services" className="group relative transition hover:text-[#e6d5c7]">
  Services
  <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
</Link>

          <Link href="/contact" className="group relative transition hover:text-[#e6d5c7]">
            Contact
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
}