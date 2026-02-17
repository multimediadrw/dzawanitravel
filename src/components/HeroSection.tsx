"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient untuk keterbacaan text */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple/90 via-purple/70 to-purple/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-magenta/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container-main mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gold-light">
                Biro Perjalanan Umroh Terpercaya
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Wujudkan Impian
              <br />
              <span className="text-magenta-light">Ibadah Umroh</span>
              <br />
              Anda Bersama Kami
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
              Perjalanan spiritual ke Tanah Suci dengan pelayanan terbaik,
              pembimbing berpengalaman, dan harga yang amanah.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/paket-umroh" className="btn-primary text-lg">
                Lihat Paket Umroh
              </Link>
              <Link
                href="/kontak"
                className="border-2 border-white/30 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Konsultasi Gratis
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "5+", label: "Tahun Pengalaman" },
                { value: "1000+", label: "Jamaah Terlayani" },
                { value: "4.9", label: "Rating Kepuasan" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-extrabold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative Kaaba Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 mx-auto text-gold mb-4"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Kaaba simplified */}
                    <rect
                      x="25"
                      y="30"
                      width="50"
                      height="50"
                      rx="2"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x="30"
                      y="35"
                      width="40"
                      height="40"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="30"
                      y1="55"
                      x2="70"
                      y2="55"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    {/* Dome */}
                    <path
                      d="M35 30 Q50 10 65 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="50" cy="15" r="3" fill="currentColor" />
                  </svg>
                  <p className="text-white/60 text-lg font-medium">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    Bismillahirrahmanirrahim
                  </p>
                </div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute -top-4 left-1/2 w-3 h-3 bg-magenta rounded-full animate-pulse" />
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gold rounded-full animate-pulse delay-500" />
              <div className="absolute -bottom-4 left-1/3 w-3 h-3 bg-magenta-light rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
