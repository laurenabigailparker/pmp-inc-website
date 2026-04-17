"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const linkClass =
    "group relative transition hover:text-[#e6d5c7]";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(243,238,231,0.12)] bg-[#5b4636]/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-[#5b4636]/78 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:px-10 lg:px-16">
        <Link
          href="/"
          className="group relative text-lg font-light uppercase tracking-[0.22em] text-[#f3eee7] transition sm:text-xl md:text-2xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          PMP Inc
          <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav
          className="hidden items-center gap-5 text-[11px] uppercase tracking-[0.22em] text-[#f3eee7] md:flex lg:gap-8 lg:text-sm"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <Link href="/" className={linkClass}>
            Home
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/about" className={linkClass}>
            About
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/network" className={linkClass}>
            Network
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/services" className={linkClass}>
            Services
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
            <span className="absolute left-0 top-full mt-1 h-px w-0 bg-[#e6d5c7] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center justify-center border border-[rgba(243,238,231,0.2)] px-3 py-2 text-xs uppercase tracking-[0.22em] text-[#f3eee7] md:hidden"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[rgba(243,238,231,0.12)] bg-[#5b4636] md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-4 text-xs uppercase tracking-[0.22em] text-[#f3eee7] sm:px-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-3">
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-3">
              About
            </Link>
            <Link href="/network" onClick={() => setMenuOpen(false)} className="py-3">
              Network
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="py-3">
              Services
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-3">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}