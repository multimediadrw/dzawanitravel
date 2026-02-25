"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/hero-makkah.jpg",
    alt: "Masjidil Haram Makkah",
    label: "Masjidil Haram, Makkah Al-Mukarramah",
  },
  {
    src: "/hero-madinah.jpg",
    alt: "Masjid Nabawi Madinah",
    label: "Masjid Nabawi, Madinah Al-Munawwarah",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? (fade ? 1 : 0) : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Purple overlay gradient - khas brand Dzawani Travel */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-purple-700/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-900/20 to-transparent" />

      {/* Slide label bottom left */}
      <div className="absolute bottom-8 left-8 z-10">
        <p className="text-white/60 text-xs tracking-widest uppercase">
          {slides[current].label}
        </p>
      </div>

      {/* Slide dots bottom right */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(false);
              setTimeout(() => { setCurrent(i); setFade(true); }, 300);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-main mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-yellow-300">
              Biro Perjalanan Umroh Terpercaya
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Wujudkan Impian
            <br />
            <span className="text-yellow-300">Ibadah Umroh</span>
            <br />
            Anda Bersama Kami
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-xl drop-shadow">
            Perjalanan spiritual ke Tanah Suci dengan pelayanan terbaik,
            pembimbing berpengalaman, dan harga yang amanah.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/paket-umroh"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              Lihat Paket Umroh
            </Link>
            <Link
              href="/reservasi"
              className="border-2 border-white/50 text-white font-bold py-3 px-8 rounded-full hover:bg-white/15 backdrop-blur-sm transition-all duration-300"
            >
              Reservasi Sekarang
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "1000+", label: "Jamaah Terlayani" },
              { value: "4.9", label: "Rating Kepuasan" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold text-yellow-300 drop-shadow">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
