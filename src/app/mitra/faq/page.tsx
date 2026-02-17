'use client';

import { useState } from 'react';

export default function FAQMitra() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apa saja persyaratan untuk menjadi mitra Dzawani Travel?',
      answer: 'Persyaratannya sangat mudah: (1) Muslim/Muslimah, (2) Usia minimal 18 tahun, (3) Memiliki KTP, (4) Bersedia mengikuti pelatihan, dan (5) Membayar biaya pendaftaran mitra sebesar Rp 1.550.000.',
    },
    {
      question: 'Berapa komisi yang akan saya dapatkan?',
      answer: 'Komisi yang Anda dapatkan bervariasi tergantung paket dan jumlah jamaah. Rata-rata komisi per jamaah adalah Rp 3.000.000 - Rp 4.000.000. Semakin banyak jamaah yang Anda rekrut, semakin besar komisi yang Anda terima!',
    },
    {
      question: 'Apakah ada kontrak kerja atau target penjualan?',
      answer: 'Tidak ada kontrak kerja yang mengikat. Anda bebas bekerja sesuai waktu dan kemampuan Anda. Tidak ada target penjualan wajib, namun kami memberikan bonus dan insentif bagi mitra yang aktif.',
    },
    {
      question: 'Bagaimana cara mendapatkan umroh gratis?',
      answer: 'Anda bisa mendapatkan umroh gratis setelah berhasil merekrut minimal 5 jamaah yang berangkat. Program ini sebagai bentuk apresiasi kami kepada mitra yang aktif dan berprestasi.',
    },
    {
      question: 'Saya tidak punya pengalaman di bidang travel, apakah bisa sukses?',
      answer: 'Tentu saja bisa! Kami menyediakan pelatihan lengkap, materi promosi, dan dukungan tim profesional. Banyak mitra kami yang awalnya tidak punya pengalaman, namun sekarang sudah sukses merekrut puluhan jamaah.',
    },
    {
      question: 'Apakah saya harus punya kantor untuk menjadi mitra?',
      answer: 'Tidak perlu! Semua bisa dikerjakan secara online dari rumah menggunakan HP atau laptop. Kami sudah menyediakan sistem online yang memudahkan Anda mengelola jamaah dan komisi.',
    },
    {
      question: 'Bagaimana sistem pembayaran komisi?',
      answer: 'Komisi akan dibayarkan setelah jamaah melunasi pembayaran dan berangkat umroh. Pembayaran dilakukan melalui transfer bank ke rekening Anda. Semua transparan dan tercatat dalam sistem.',
    },
    {
      question: 'Apakah ada biaya tersembunyi atau biaya bulanan?',
      answer: 'Tidak ada biaya tersembunyi atau biaya bulanan. Anda hanya perlu membayar biaya pendaftaran awal sebesar Rp 1.550.000 dan Anda sudah mendapatkan semua tools dan akses sistem selamanya.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple to-magenta text-white py-24">
        <div className="container-main mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto">
            Masih ragu? Temukan jawabannya di sini sebelum Anda bergabung jadi Mitra.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-main mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <span className="text-lg font-bold text-purple pr-8">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-magenta flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
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
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple to-magenta">
        <div className="container-main mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tim kami siap menjawab semua pertanyaan Anda via WhatsApp
          </p>
          <a
            href="https://wa.me/6208112222254?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20program%20mitra%20Dzawani%20Travel"
            className="inline-flex items-center gap-2 bg-white text-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tanya Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
