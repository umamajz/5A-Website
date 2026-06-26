"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "Materials", href: "/materials" },
  { label: "References", href: "/references" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-[#1a1a1a]">5A</span>
          <span className="hidden sm:inline text-xs text-[#888] uppercase tracking-widest">Design</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#444] hover:text-[#1a1a1a] tracking-wide transition-colors">{l.label}</Link>
          ))}
        </nav>
        <Link href="/shop" className="hidden lg:block text-sm bg-[#1a1a1a] text-white px-5 py-2 hover:bg-[#333] transition-colors">Shop</Link>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e4dc] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-base text-[#444] hover:text-[#1a1a1a] py-1" onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/shop" className="mt-2 text-sm bg-[#1a1a1a] text-white px-5 py-2.5 text-center hover:bg-[#333] transition-colors" onClick={() => setMenuOpen(false)}>Shop</Link>
        </div>
      )}
    </header>
  );
}
