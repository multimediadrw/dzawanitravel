"use client";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6208112222254?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20paket%20umroh%20Dzawani%20Travel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-all duration-300 group"
      aria-label="Hubungi Admin"
    >
      <Image
        src="/hubungi-admin-icon.png"
        alt="Hubungi Admin"
        width={64}
        height={64}
        className="w-16 h-16 object-contain drop-shadow-lg"
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-charcoal text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Hubungi Admin
      </span>
    </a>
  );
}
