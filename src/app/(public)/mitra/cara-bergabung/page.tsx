export default function CaraBergabung() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple to-magenta text-white py-24">
        <div className="container-main mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            💎 Perlengkapan Mitra Bernilai Rp2.500.000
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto">
            Cukup investasi Rp1.550.000, Anda sudah mendapatkan berbagai alat promosi profesional ini!
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container-main mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple text-center mb-12">
            Tools Mitra Senilai 2,5 Juta
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Rollup Banner', icon: '📜' },
              { name: 'Spanduk Promosi', icon: '🖼️' },
              { name: 'Tas Mitra', icon: '💼' },
              { name: 'ID Card + E-Money', icon: '🪪' },
              { name: 'Kartu Nama', icon: '📇' },
              { name: 'Brosur 1 Rim', icon: '📄' },
              { name: 'Buku Formulir', icon: '📖' },
              { name: 'Jas/Gamis Eksklusif', icon: '👔' },
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-bold text-purple">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container-main mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple text-center mb-4">
            💎 Cara Bergabung Jadi Mitra
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Hanya perlu 4 langkah mudah untuk memulai bisnis travel umroh yang halal dan menguntungkan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple to-magenta rounded-3xl p-8 text-white shadow-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-extrabold text-purple">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Hubungi Admin</h3>
                <p className="text-white/90 text-center leading-relaxed">
                  Klik tombol WhatsApp untuk terhubung dengan tim kami dan dapatkan penjelasan detail.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple to-magenta rounded-3xl p-8 text-white shadow-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-extrabold text-purple">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Pendaftaran</h3>
                <p className="text-white/90 text-center leading-relaxed">
                  Isi formulir pendaftaran dan lakukan investasi awal sebesar Rp1.550.000.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple to-magenta rounded-3xl p-8 text-white shadow-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-extrabold text-purple">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Terima Perlengkapan</h3>
                <p className="text-white/90 text-center leading-relaxed">
                  Paket mitra dikirim ke alamat Anda termasuk alat promosi dan akses sistem.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple to-magenta rounded-3xl p-8 text-white shadow-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-extrabold text-purple">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Pelatihan & Mulai</h3>
                <p className="text-white/90 text-center leading-relaxed">
                  Bergabung dengan grup eksklusif dan dapatkan pelatihan pemasaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-main mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple text-center mb-12">
            💰 Berapa Keuntungan Jadi Mitra?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Benefit 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple to-magenta rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple mb-2">Komisi Rp4.000.000 / Jamaah</h3>
                <p className="text-gray-600 leading-relaxed">
                  Setiap 1 orang mendaftar umroh lewat Anda, langsung dapat komisi hingga Rp4.000.000!
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple to-magenta rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple mb-2">Balik Modal di Jamaah Pertama</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hanya perlu 1 jamaah saja untuk balik modal dari investasi awal Anda.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple to-magenta rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple mb-2">Umroh Gratis di Jamaah ke-5</h3>
                <p className="text-gray-600 leading-relaxed">
                  Capai target minimal, dan Anda berangkat umroh GRATIS sebagai hadiah loyalitas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple to-magenta">
        <div className="container-main mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Siap Memulai Bisnis Travel Umroh?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Mulailah dari 1 jamaah — dan lihat sendiri hasilnya!
          </p>
          <a
            href="https://wa.me/6208112222254?text=Assalamualaikum%2C%20saya%20ingin%20bergabung%20menjadi%20mitra%20Dzawani%20Travel"
            className="inline-flex items-center gap-2 bg-white text-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Gabung Sekarang & Mulai Dapat Komisi!
          </a>
        </div>
      </section>
    </div>
  );
}
