"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleRoute = () => setOpen(false);
    window.addEventListener("hashchange", handleRoute);
    return () => window.removeEventListener("hashchange", handleRoute);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-white/80 shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Aban
            </a>
            <span className="text-sm text-gray-500 hidden sm:inline">
              • Frontend Dev
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm py-2 px-4 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                aria-label={`Go to ${l.label}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${
                  open ? "rotate-90 text-red-500" : "rotate-0"
                }`}
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 border-t border-gray-200`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-3 px-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
