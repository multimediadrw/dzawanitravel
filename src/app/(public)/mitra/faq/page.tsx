'use client';

import { useState } from 'react';

export default function FAQMitra() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    nama: '',
    namaPasangan: '',
    nik: '',
    alamat: '',
    kodePos: '',
    kabupaten: '',
    provinsi: '',
    noHp: '',
    noRekening: '',
    namaBank: '',
    cabangBank: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `*PENDAFTARAN MITRA DZAWANI TRAVEL*

*DATA PRIBADI*
Nama Mitra: ${formData.nama}
Nama Pasangan: ${formData.namaPasangan || '-'}
NIK KTP: ${formData.nik}

*ALAMAT PENGIRIMAN*
Alamat: ${formData.alamat}
Kode Pos: ${formData.kodePos}
Kabupaten/Kota: ${formData.kabupaten}
Provinsi: ${formData.provinsi}

*KONTAK*
No HP: ${formData.noHp}

*DATA BANK*
Nomor Rekening: ${formData.noRekening}
Nama Bank: ${formData.namaBank}
Cabang Bank: ${formData.cabangBank}

---
*Catatan:* Mohon kirim juga dokumen berikut:
1. Foto KTP
2. Bukti Transfer Rp 1.550.000
3. Foto Wajah (untuk ID Card)`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6208112222254?text=${encodedMessage}`, '_blank');
  };

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

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container-main mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple mb-4">
              Formulir Pendaftaran Mitra
            </h2>
            <p className="text-gray-600 text-lg">
              Isi formulir di bawah ini dengan data yang lengkap dan benar untuk bergabung menjadi mitra Dzawani Travel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {/* Nama Mitra Baru */}
            <div className="mb-6">
              <label htmlFor="nama" className="block text-purple font-bold mb-2">
                Nama Mitra Baru <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            {/* Nama Pasangan */}
            <div className="mb-6">
              <label htmlFor="namaPasangan" className="block text-purple font-bold mb-2">
                Nama Pasangan (jika ada)
              </label>
              <input
                type="text"
                id="namaPasangan"
                name="namaPasangan"
                value={formData.namaPasangan}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Masukkan nama pasangan"
              />
            </div>

            {/* NIK KTP */}
            <div className="mb-6">
              <label htmlFor="nik" className="block text-purple font-bold mb-2">
                NIK KTP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nik"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                required
                maxLength={16}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="16 digit NIK KTP"
              />
            </div>

            {/* Alamat Domisili */}
            <div className="mb-6">
              <label htmlFor="alamat" className="block text-purple font-bold mb-2">
                Alamat Domisili untuk Kirim Paket <span className="text-red-500">*</span>
              </label>
              <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Alamat lengkap"
              />
              <p className="text-sm text-gray-500 mt-1">Alamat Jalan</p>
            </div>

            {/* Kode Pos */}
            <div className="mb-6">
              <label htmlFor="kodePos" className="block text-purple font-bold mb-2">
                Kode Pos <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="kodePos"
                name="kodePos"
                value={formData.kodePos}
                onChange={handleInputChange}
                required
                maxLength={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Kode pos"
              />
            </div>

            {/* Kabupaten/Kota */}
            <div className="mb-6">
              <label htmlFor="kabupaten" className="block text-purple font-bold mb-2">
                Kabupaten/Kota <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="kabupaten"
                name="kabupaten"
                value={formData.kabupaten}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Kabupaten/Kota"
              />
            </div>

            {/* Provinsi */}
            <div className="mb-6">
              <label htmlFor="provinsi" className="block text-purple font-bold mb-2">
                Provinsi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="provinsi"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Provinsi"
              />
            </div>

            {/* No HP */}
            <div className="mb-6">
              <label htmlFor="noHp" className="block text-purple font-bold mb-2">
                No HP Mitra Baru <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="noHp"
                name="noHp"
                value={formData.noHp}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="08xxxxxxxxxx"
              />
              <p className="text-sm text-gray-500 mt-1">Harap masukkan nomor telepon yang benar.</p>
            </div>

            {/* Nomor Rekening */}
            <div className="mb-6">
              <label htmlFor="noRekening" className="block text-purple font-bold mb-2">
                Nomor Rekening Mitra Baru <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="noRekening"
                name="noRekening"
                value={formData.noRekening}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Nomor rekening"
              />
            </div>

            {/* Nama Bank */}
            <div className="mb-6">
              <label htmlFor="namaBank" className="block text-purple font-bold mb-2">
                Nama Bank Mitra Baru <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="namaBank"
                name="namaBank"
                value={formData.namaBank}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Nama bank"
              />
            </div>

            {/* Cabang Bank */}
            <div className="mb-8">
              <label htmlFor="cabangBank" className="block text-purple font-bold mb-2">
                Cabang Bank Mitra Baru <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cabangBank"
                name="cabangBank"
                value={formData.cabangBank}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-magenta focus:outline-none transition-colors"
                placeholder="Cabang bank"
              />
            </div>

            {/* Info Upload */}
            <div className="bg-purple/5 rounded-2xl p-6 mb-8">
              <h3 className="text-purple font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                Dokumen yang Perlu Disiapkan
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-magenta mt-1">•</span>
                  <span>Foto KTP (file gambar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-magenta mt-1">•</span>
                  <span>Bukti Transfer Rp 1.550.000 (file gambar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-magenta mt-1">•</span>
                  <span>Foto Wajah untuk ID Card (file gambar)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Setelah submit formulir, Anda akan diarahkan ke WhatsApp untuk mengirim dokumen-dokumen di atas.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple to-magenta text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Kirim Pendaftaran via WhatsApp
            </button>
          </form>
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
