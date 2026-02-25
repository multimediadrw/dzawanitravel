"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    pertanyaan: "Apakah tabungan ini aman?",
    jawaban:
      "Sangat aman. Rekening dibuka di Bank Syariah Indonesia (BSI) atas nama Anda sendiri. Dzawani Travel hanya membantu proses pembukaan dan koordinasi keberangkatan.",
  },
  {
    pertanyaan: "Apakah dana bisa ditarik jika ada keadaan darurat?",
    jawaban:
      "Bisa. Meskipun tidak diberikan kartu ATM (agar tabungan tidak terpakai jajan), Anda tetap bisa menarik dana melalui Teller di kantor cabang BSI seluruh Indonesia.",
  },
  {
    pertanyaan: "Berapa minimal setoran setiap bulannya?",
    jawaban:
      "Tidak ada minimal. Anda bebas menyetor Rp10.000, Rp50.000, atau berapa pun sesuai kelapangan rezeki Anda, tanpa jadwal tetap.",
  },
  {
    pertanyaan: "Apakah ada biaya potongan setiap bulan?",
    jawaban:
      "Tidak ada. Tabungan ini menggunakan akad Wadiah (titipan) yang bebas biaya administrasi bulanan, sehingga saldo Anda utuh untuk biaya umroh.",
  },
  {
    pertanyaan: "Bagaimana saya memantau saldo saya?",
    jawaban:
      "Anda bisa memantau saldo secara real-time 24/7 melalui aplikasi BYOND by BSI di smartphone Anda.",
  },
  {
    pertanyaan: "Apa syarat utama untuk mendaftar?",
    jawaban:
      "Cukup membawa KTP Asli dan setoran awal minimal Rp100.000.",
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Setoran Ringan",
    description: "Awal hanya Rp100.000, selanjutnya bebas nominal sesuai kemampuan Anda.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Sangat Fleksibel",
    description: "Setoran bebas nominal berapa pun, kapan pun ada rezeki lebih. Tidak ada jadwal tetap.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Saldo Utuh 100%",
    description: "Tanpa biaya administrasi bulanan dan tanpa saldo mengendap. Semua uang Anda untuk umroh.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Saldo Aman & Fokus",
    description: "Tanpa kartu ATM agar bisa fokus menabung. Penarikan darurat tetap bisa via Teller BSI.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Transparan",
    description: "Pantau saldo secara real-time 24/7 lewat aplikasi BYOND by BSI di smartphone Anda.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: "Syarat Mudah",
    description: "Cukup KTP asli untuk buka rekening. Proses cepat dan mudah melalui aplikasi BYOND by BSI.",
  },
];

const steps = [
  {
    number: "01",
    title: "Siapkan KTP",
    description: "Siapkan KTP asli Anda sebagai dokumen utama pembukaan rekening tabungan umroh.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Hubungi Admin",
    description: "Klik tombol pendaftaran di halaman ini. Admin kami siap memandu Anda 24/7.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Buka Rekening",
    description: "Proses pembukaan rekening cepat dan mudah melalui aplikasi BYOND by BSI.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mulai Menabung",
    description: "Setoran awal Rp100.000 dan pantau perkembangan saldo umroh Anda via HP kapan saja.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Hj. Fatimah Azzahra",
    kota: "Jakarta",
    text: "Alhamdulillah, dengan Tabungan Umroh BSI bersama Dzawani Travel, uang saya tidak terpakai jajan. Sekarang sudah terkumpul untuk berangkat tahun depan!",
    initial: "F",
  },
  {
    name: "Bpk. Hendra Santoso",
    kota: "Surabaya",
    text: "Saya kaget ternyata semudah ini. Cukup KTP, langsung buka rekening via BYOND. Tidak ada potongan admin sama sekali, saldo utuh terus.",
    initial: "H",
  },
  {
    name: "Ibu Sari Dewi",
    kota: "Bandung",
    text: "Dulu sering gagal nabung karena uangnya kepake. Sekarang pakai tabungan khusus ini, fokus banget. Insya Allah tahun 2026 berangkat!",
    initial: "S",
  },
];

export default function TabunganUmrohPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    domisili: "",
    keberangkatan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const waNumber = "6208112222254";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Auto-redirect ke WhatsApp dengan pesan otomatis
    const pesan = encodeURIComponent(
      `Halo Dzawani Travel, saya ${formData.nama}, saya baru saja mengisi form di web dan ingin konsultasi lanjut tentang Tabungan Umroh 100rb. Domisili saya di ${formData.domisili}, rencana keberangkatan ${formData.keberangkatan}. Nomor WA saya: ${formData.whatsapp}`
    );

    setSubmitted(true);
    setLoading(false);

    // Buka WhatsApp setelah submit
    setTimeout(() => {
      window.open(`https://wa.me/${waNumber}?text=${pesan}`, "_blank");
    }, 800);
  };

  const handleWAClick = () => {
    const pesan = encodeURIComponent(
      "Halo Dzawani, saya ingin buka Tabungan Umroh 100rb, persyaratannya apa saja?"
    );
    window.open(`https://wa.me/${waNumber}?text=${pesan}`, "_blank");
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 gradient-purple" />
        <div className="absolute inset-0 bg-[url('/galeri/img1.jpg')] bg-cover bg-center opacity-10" />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-magenta/10 rounded-full blur-3xl" />

        <div className="relative container-main mx-auto px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gold-light">
                  Tabungan Umroh x Bank Syariah Indonesia
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                #SatuLangkahLagi
                <br />
                <span className="text-magenta-light">Ke Baitullah</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gold mb-4">
                Mulai Tabungan Umrohmu Hanya dengan Rp100.000!
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                Rekening atas nama sendiri, aman, tanpa biaya admin, dan
                dipantau langsung via BYOND by BSI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleWAClick}
                  className="btn-primary text-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Daftar Sekarang via WhatsApp
                </button>
                <a
                  href="#form-pendaftaran"
                  className="border-2 border-white/30 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Isi Form Daftar
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { value: "Rp0", label: "Biaya Admin" },
                  { value: "100%", label: "Saldo Utuh" },
                  { value: "BSI", label: "Bank Terpercaya" },
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

            {/* Right Side - Decorative */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center px-8">
                    {/* BSI Logo Placeholder */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-14 h-14 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-lg">Tabungan Umroh</p>
                    <p className="text-gold text-sm mt-1">Dzawani × BSI</p>
                    <div className="mt-4 bg-white/10 rounded-xl px-4 py-3">
                      <p className="text-white/60 text-xs">Akad</p>
                      <p className="text-gold font-bold">Wadiah Yad Dhamanah</p>
                      <p className="text-white/50 text-xs mt-1">Bebas Riba, Halal 100%</p>
                    </div>
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

      {/* ===== PROBLEM & SOLUTION SECTION ===== */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Problem */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-error">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-error uppercase tracking-widest">Masalah Umum</span>
                  <h3 className="text-xl font-bold text-purple mt-2 mb-3">
                    Niat Umroh Sering Kandas?
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    Uang tabungan sering terpakai jajan atau terpotong biaya
                    admin setiap bulan, sehingga impian ke Tanah Suci terus
                    tertunda.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-purple rounded-3xl p-8 shadow-lg border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gold uppercase tracking-widest">Solusi Kami</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">
                    Tabungan Umroh Dzawani × BSI
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Tabungan khusus umroh yang aman dari keinginan konsumtif,
                    tanpa biaya admin, dan tetap fleksibel. Uang Anda aman,
                    tujuan Anda jelas: Baitullah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FITUR UTAMA (USP) SECTION ===== */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-magenta/10 text-magenta text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Keunggulan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple mb-4">
              Mengapa Tabungan Umroh Dzawani × BSI?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
              Dirancang khusus agar niat Anda ke Tanah Suci tidak lagi terganggu
              hal-hal yang tidak perlu.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-cream rounded-2xl p-7 hover:bg-purple hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-magenta/10 group-hover:bg-white/10 flex items-center justify-center text-magenta group-hover:text-gold mb-5 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-purple group-hover:text-white mb-2 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-charcoal/60 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CARA MEMULAI (HOW IT WORKS) SECTION ===== */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-gold/10 text-gold-light text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Alur Pendaftaran
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple mb-4">
              Cara Memulai Tabungan Umroh
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto text-lg">
              Hanya 4 langkah mudah dan Anda sudah resmi menabung untuk umroh.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-magenta/20 z-0" />
                )}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-purple flex items-center justify-center text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-extrabold text-magenta/20 block mb-1">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-purple mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={handleWAClick}
              className="btn-primary text-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Mulai Sekarang via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS / TESTIMONI SECTION ===== */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-purple/10 text-purple text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple mb-4">
              Mereka Sudah Mulai Menabung
            </h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Bergabunglah bersama jamaah yang sudah mempercayakan impian umroh
              mereka kepada Dzawani Travel.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-cream rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal/70 italic leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-purple text-sm">{t.name}</p>
                    <p className="text-charcoal/50 text-xs">{t.kota}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner / Trust Logos - Infinite Marquee */}
          <div className="bg-cream rounded-3xl py-8 overflow-hidden">
            <p className="text-center text-charcoal/50 text-sm font-medium uppercase tracking-widest mb-8">
              Didukung &amp; Diakui Oleh
            </p>
            <div className="relative w-full overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
              {/* Marquee track */}
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set */}
                {[
                  { src: "/partners/logo-bsi.jpg", alt: "Bank Syariah Indonesia", h: "h-12" },
                  { src: "/partners/logo-kemenag.svg", alt: "Kementerian Agama RI", h: "h-14" },
                  { src: "/partners/logo-byond.png", alt: "BYOND by BSI", h: "h-12" },
                  { src: "/partners/logo-asita.png", alt: "ASITA", h: "h-14" },
                  { src: "/partners/logo-amphuri.png", alt: "AMPHURI", h: "h-10" },
                ].map((logo, i) => (
                  <div key={`a-${i}`} className="inline-flex items-center justify-center mx-10 shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={60}
                      className={`${logo.h} w-auto object-contain`}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { src: "/partners/logo-bsi.jpg", alt: "Bank Syariah Indonesia", h: "h-12" },
                  { src: "/partners/logo-kemenag.svg", alt: "Kementerian Agama RI", h: "h-14" },
                  { src: "/partners/logo-byond.png", alt: "BYOND by BSI", h: "h-12" },
                  { src: "/partners/logo-asita.png", alt: "ASITA", h: "h-14" },
                  { src: "/partners/logo-amphuri.png", alt: "AMPHURI", h: "h-10" },
                ].map((logo, i) => (
                  <div key={`b-${i}`} className="inline-flex items-center justify-center mx-10 shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={60}
                      className={`${logo.h} w-auto object-contain`}
                    />
                  </div>
                ))}
                {/* Third set for extra smoothness */}
                {[
                  { src: "/partners/logo-bsi.jpg", alt: "Bank Syariah Indonesia", h: "h-12" },
                  { src: "/partners/logo-kemenag.svg", alt: "Kementerian Agama RI", h: "h-14" },
                  { src: "/partners/logo-byond.png", alt: "BYOND by BSI", h: "h-12" },
                  { src: "/partners/logo-asita.png", alt: "ASITA", h: "h-14" },
                  { src: "/partners/logo-amphuri.png", alt: "AMPHURI", h: "h-10" },
                ].map((logo, i) => (
                  <div key={`c-${i}`} className="inline-flex items-center justify-center mx-10 shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={60}
                      className={`${logo.h} w-auto object-contain`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-magenta/10 text-magenta text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-charcoal/60">
              Kami menjawab keraguan Anda sebelum memulai perjalanan menabung.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors"
                >
                  <span className="font-semibold text-purple pr-4">
                    {faq.pertanyaan}
                  </span>
                  <svg
                    className={`w-5 h-5 text-magenta shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="6 9 12 15 18 9"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-charcoal/70 leading-relaxed">
                    {faq.jawaban}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM PENDAFTARAN SECTION ===== */}
      <section id="form-pendaftaran" className="section-padding bg-purple">
        <div className="container-main mx-auto max-w-2xl">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-gold/20 text-gold text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Daftar Sekarang
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Daftar Niat Umroh Anda Sekarang
            </h2>
            <p className="text-white/70">
              Isi data di bawah ini, admin kami akan segera menghubungi Anda
              untuk membantu proses pembukaan rekening.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Jazakallahu Khairan!
              </h3>
              <p className="text-white/70 mb-6">
                Data Anda berhasil dikirim. Anda akan diarahkan ke WhatsApp
                admin kami untuk konsultasi lebih lanjut.
              </p>
              <button
                onClick={handleWAClick}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp Admin
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-5"
            >
              {/* Nama */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Nama Lengkap <span className="text-magenta-light">*</span>
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Nomor WhatsApp <span className="text-magenta-light">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: 08123456789"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                />
              </div>

              {/* Domisili */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Domisili / Kota <span className="text-magenta-light">*</span>
                </label>
                <input
                  type="text"
                  name="domisili"
                  value={formData.domisili}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: Jakarta Selatan"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                />
              </div>

              {/* Rencana Keberangkatan */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Rencana Keberangkatan <span className="text-magenta-light">*</span>
                </label>
                <select
                  name="keberangkatan"
                  value={formData.keberangkatan}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:bg-white/15 transition-all appearance-none"
                >
                  <option value="" className="text-charcoal bg-white">
                    -- Pilih Tahun Keberangkatan --
                  </option>
                  <option value="2026" className="text-charcoal bg-white">
                    2026
                  </option>
                  <option value="2027" className="text-charcoal bg-white">
                    2027
                  </option>
                  <option value="Belum Menentukan" className="text-charcoal bg-white">
                    Belum Menentukan
                  </option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary text-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  "Saya Mau Daftar Tabungan Umroh"
                )}
              </button>

              <p className="text-white/40 text-xs text-center">
                Dengan mendaftar, Anda setuju untuk dihubungi oleh tim Dzawani
                Travel melalui WhatsApp.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ===== FLOATING WA BUTTON ===== */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWAClick}
          className="bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:bg-[#128C7E] transition-colors flex items-center gap-2 group"
          aria-label="Daftar via WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden group-hover:inline text-sm font-bold pr-1 whitespace-nowrap">
            Daftar via WA
          </span>
        </button>
      </div>
    </>
  );
}
