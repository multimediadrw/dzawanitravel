"use client";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6208112222254?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20paket%20umroh%20Dzawani%20Travel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 md:bottom-6 md:right-6 z-50 hover:scale-110 transition-all duration-300"
      aria-label="Hubungi Admin"
    >
      <Image
        src="/hubungi-admin-icon.png"
        alt="Hubungi Admin"
        width={120}
        height={120}
        className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-xl"
      />
    </a>
  );
}
