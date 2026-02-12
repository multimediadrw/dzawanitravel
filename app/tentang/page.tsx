export default function Tentang() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-xl text-purple-100">
              Mitra terpercaya untuk perjalanan umroh dan wisata Anda
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                DzawaniTravel
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DzawaniTravel adalah perusahaan travel yang berpengalaman lebih dari 10 tahun 
                  dalam melayani perjalanan umroh dan wisata domestik maupun internasional. 
                  Kami berkomitmen untuk memberikan pelayanan terbaik dengan harga yang kompetitif.
                </p>
                <p>
                  Dengan tim yang profesional dan berpengalaman, kami telah melayani ribuan jamaah 
                  umroh dan wisatawan untuk mewujudkan impian perjalanan mereka. Kepuasan pelanggan 
                  adalah prioritas utama kami.
                </p>
                <p>
                  DzawaniTravel telah mendapatkan berbagai penghargaan dan sertifikasi resmi dari 
                  pemerintah, menjadikan kami sebagai salah satu travel agent terpercaya di Indonesia.
                </p>
              </div>
            </div>
            <div className="bg-purple-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🕌</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Visi Kami
              </h3>
              <p className="text-gray-700 mb-6">
                Menjadi perusahaan travel terdepan dan terpercaya dalam memberikan 
                pelayanan perjalanan umroh dan wisata yang berkualitas.
              </p>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                Misi Kami
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Memberikan pelayanan terbaik kepada jamaah dan wisatawan
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Menyediakan paket dengan harga kompetitif
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Mengutamakan kenyamanan dan keamanan perjalanan
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Membangun kepercayaan melalui transparansi dan profesionalisme
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-purple-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-purple-100">Jamaah Dilayani</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Destinasi Wisata</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Mengapa Memilih DzawaniTravel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">✓</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-600">
                Terpercaya & Berlisensi
              </h3>
              <p className="text-gray-600 text-center">
                Terdaftar resmi dan memiliki izin dari Kementerian Agama serta 
                Kementerian Pariwisata
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-600">
                Harga Kompetitif
              </h3>
              <p className="text-gray-600 text-center">
                Paket dengan harga terbaik dan sistem pembayaran yang fleksibel 
                sesuai kemampuan Anda
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">🏨</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-600">
                Fasilitas Terbaik
              </h3>
              <p className="text-gray-600 text-center">
                Hotel bintang 5, transportasi nyaman, dan pelayanan maksimal 
                untuk kenyamanan Anda
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">👥</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-600">
                Tim Profesional
              </h3>
              <p className="text-gray-600 text-center">
                Didampingi pembimbing dan tour guide berpengalaman yang siap 
                membantu Anda
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-600">
                Jaminan Keamanan
              </h3>
              <p className="text-gray-600 text-center">
                Asuransi perjalanan dan jaminan keamanan untuk setiap jamaah 
                dan wisatawan
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">📞</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-600">
                Layanan 24/7
              </h3>
              <p className="text-gray-600 text-center">
                Customer service yang responsif dan siap membantu Anda kapan saja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Sertifikasi & Penghargaan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🏆</div>
              <p className="text-gray-700 font-medium">Terdaftar Kemenag</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🏆</div>
              <p className="text-gray-700 font-medium">IATA Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🏆</div>
              <p className="text-gray-700 font-medium">ASITA Member</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-3">🏆</div>
              <p className="text-gray-700 font-medium">ISO Certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
