"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/paket-umroh", label: "Paket Umroh" },
  { href: "/tabungan-umroh", label: "Tabungan Umroh" },
  { href: "/galeri", label: "Galeri" },
  { href: "/reservasi", label: "Reservasi" },
];

const mitraLinks = [
  { href: "/mitra/bisnis-travel", label: "Bisnis Travel" },
  { href: "/mitra/keunggulan", label: "Keunggulan" },
  { href: "/mitra/cara-bergabung", label: "Cara Bergabung" },
  { href: "/mitra/testimoni", label: "Testimoni" },
  { href: "/mitra/faq", label: "FAQ" },
];

// Halaman yang memiliki hero foto (navbar transparan di atas)
const HERO_PAGES = ["/", "/paket-umroh", "/tabungan-umroh", "/galeri", "/reservasi", "/mitra/bisnis-travel", "/mitra/keunggulan", "/mitra/cara-bergabung", "/mitra/testimoni", "/mitra/faq"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mitraDropdownOpen, setMitraDropdownOpen] = useState(false);
  const [mitraMobileOpen, setMitraMobileOpen] = useState(false);
  const pathname = usePathname();

  // Semua halaman public punya hero transparan
  const isHeroPage = true;
  const isTransparent = isHeroPage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    // Cek saat pertama load
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll state saat pindah halaman
  useEffect(() => {
    setScrolled(window.scrollY > 80);
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container-main mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isTransparent ? "/logo-white.png" : "/logo.png"}
              alt="Dzawani Travel Indonesia"
              width={200}
              height={60}
              className="h-10 w-auto md:h-12 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-medium transition-colors duration-200 rounded-lg ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-charcoal hover:text-magenta hover:bg-magenta/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Gabung Mitra Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMitraDropdownOpen(true)}
              onMouseLeave={() => setMitraDropdownOpen(false)}
            >
              <button
                className={`px-4 py-2 font-medium transition-colors duration-200 rounded-lg flex items-center gap-1 ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-charcoal hover:text-magenta hover:bg-magenta/5"
                }`}
              >
                Gabung Mitra
                <svg
                  className={`w-4 h-4 transition-transform ${mitraDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-200 ${
                  mitraDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {mitraLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-6 py-3 text-charcoal font-medium hover:text-magenta hover:bg-magenta/5 transition-colors border-b border-gray-100 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="https://wa.me/6208112222254"
              target="_blank"
              className={`ml-4 text-sm py-2.5 px-6 font-bold rounded-full transition-all duration-300 ${
                isTransparent
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30"
                  : "btn-primary"
              }`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? "hover:bg-white/10" : "hover:bg-cream"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isTransparent ? "text-white" : "text-purple"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px] pb-6" : "max-h-0"
          }`}
        >
          <div className={`flex flex-col gap-1 pt-2 border-t ${isTransparent ? "border-white/20" : "border-grey-light"}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 font-medium rounded-lg transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-charcoal hover:text-magenta hover:bg-magenta/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Gabung Mitra Mobile */}
            <div>
              <button
                onClick={() => setMitraMobileOpen(!mitraMobileOpen)}
                className={`w-full px-4 py-3 font-medium rounded-lg transition-colors flex items-center justify-between ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-charcoal hover:text-magenta hover:bg-magenta/5"
                }`}
              >
                Gabung Mitra
                <svg
                  className={`w-4 h-4 transition-transform ${mitraMobileOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mitraMobileOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                {mitraLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setIsOpen(false); setMitraMobileOpen(false); }}
                    className={`block pl-8 pr-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-charcoal hover:text-magenta hover:bg-magenta/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="https://wa.me/6208112222254"
              target="_blank"
              className={`mt-2 text-center text-sm font-bold py-3 px-6 rounded-full transition-all ${
                isTransparent
                  ? "bg-white/20 text-white border border-white/40 hover:bg-white/30"
                  : "btn-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
