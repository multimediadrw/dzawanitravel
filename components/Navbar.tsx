"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/paket-umroh", label: "Paket Umroh" },
    { href: "/paket-travel", label: "Paket Travel" },
    { href: "/galeri", label: "Galeri" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">
                Dzawani<span className="text-purple-800">Travel</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="block px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
