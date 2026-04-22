"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-(--shadow-ambient)" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-18">
        {/* Logo */}
        <a
          href="#"
          className="font-[var(--font-display)] font-bold text-xl tracking-tight text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Sere Innovations
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex gradient-cta text-on-primary text-sm font-semibold px-5 py-2.5 rounded-(--radius-xl) hover:shadow-(--shadow-hover) transition-all duration-200"
        >
          Request a Demo
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 glass ${
          mobileOpen ? "max-h-80 pb-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="inline-flex gradient-cta text-on-primary text-sm font-semibold px-5 py-2.5 rounded-(--radius-xl)"
            >
              Request a Demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
