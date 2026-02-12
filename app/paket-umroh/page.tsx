import Link from "next/link";

export default function PaketUmroh() {
  const umrohPackages = [
    {
      id: 1,
      title: "Umroh Reguler 9 Hari",
      price: "Rp 25.000.000",
      duration: "9 Hari",
      description: "Paket umroh reguler dengan fasilitas lengkap dan nyaman untuk perjalanan ibadah Anda",
      features: [
        "Hotel Bintang 5 dekat Masjidil Haram",
        "Makkah 4 Malam",
        "Madinah 4 Malam",
        "Visa & Perlengkapan Umroh",
        "Tiket Pesawat PP",
        "Makan 3x Sehari",
        "Tour Guide Berpengalaman",
        "Ziarah Lengkap",
      ],
      image: "🕌",
      badge: "Populer",
    },
    {
      id: 2,
      title: "Umroh Plus Turki 16 Hari",
      price: "Rp 45.000.000",
      duration: "16 Hari",
      description: "Umroh plus wisata religi ke Turki dengan pengalaman spiritual dan budaya yang tak terlupakan",
      features: [
        "Hotel Bintang 5",
        "Umroh Lengkap",
        "Wisata Turki (Istanbul, Bursa, Cappadocia)",
        "City Tour & Ziarah",
        "Visa Arab & Turki",
        "Tiket Pesawat PP",
        "Makan 3x Sehari",
        "Tour Guide Profesional",
      ],
      image: "✈️",
      badge: "Best Seller",
    },
    {
      id: 3,
      title: "Umroh Ramadhan 12 Hari",
      price: "Rp 38.000.000",
      duration: "12 Hari",
      description: "Rasakan keistimewaan beribadah di bulan Ramadhan dengan paket spesial kami",
      features: [
        "Hotel Bintang 5 Premium",
        "Makkah 6 Malam",
        "Madinah 5 Malam",
        "Sahur & Iftar di Hotel",
        "Visa & Perlengkapan",
        "Tiket Pesawat PP",
        "Ziarah Lengkap",
        "Pembimbing Spiritual",
      ],
      image: "🌙",
      badge: "Spesial",
    },
    {
      id: 4,
      title: "Umroh Hemat 7 Hari",
      price: "Rp 18.000.000",
      duration: "7 Hari",
      description: "Paket umroh ekonomis dengan fasilitas memadai untuk perjalanan ibadah Anda",
      features: [
        "Hotel Bintang 4",
        "Makkah 3 Malam",
        "Madinah 3 Malam",
        "Visa & Perlengkapan",
        "Tiket Pesawat PP",
        "Makan 2x Sehari",
        "Tour Guide",
        "Ziarah Utama",
      ],
      image: "💰",
      badge: "Hemat",
    },
    {
      id: 5,
      title: "Umroh VIP 14 Hari",
      price: "Rp 65.000.000",
      duration: "14 Hari",
      description: "Paket umroh premium dengan fasilitas eksklusif dan pelayanan maksimal",
      features: [
        "Hotel Bintang 5 Premium View Ka'bah",
        "Makkah 7 Malam",
        "Madinah 6 Malam",
        "Private Tour Guide",
        "Visa & Perlengkapan Premium",
        "Business Class Flight",
        "Makan 4x Sehari",
        "Ziarah Lengkap + Eksklusif",
      ],
      image: "👑",
      badge: "VIP",
    },
    {
      id: 6,
      title: "Umroh Plus Dubai 14 Hari",
      price: "Rp 42.000.000",
      duration: "14 Hari",
      description: "Kombinasi ibadah umroh dan wisata modern di Dubai yang menakjubkan",
      features: [
        "Hotel Bintang 5",
        "Umroh Lengkap",
        "Dubai City Tour (Burj Khalifa, Dubai Mall)",
        "Desert Safari",
        "Visa Arab & UAE",
        "Tiket Pesawat PP",
        "Makan 3x Sehari",
        "Tour Guide Berpengalaman",
      ],
      image: "🏙️",
      badge: "Trending",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Umroh</h1>
            <p className="text-xl text-purple-100">
              Pilih paket umroh terbaik sesuai kebutuhan dan budget Anda
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrohPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.badge}
                  </span>
                </div>

                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 text-center">
                  <div className="text-5xl mb-3">{pkg.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-purple-100 mb-2">{pkg.duration}</p>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                  <p className="text-sm text-purple-100 mt-1">per orang</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <h4 className="font-semibold text-purple-600 mb-3">Fasilitas:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700 text-sm">
                        <svg
                          className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link
                      href="/kontak"
                      className="block text-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold"
                    >
                      Pesan Sekarang
                    </Link>
                    <button className="w-full text-center border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors duration-200 font-semibold">
                      Info Lengkap
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Paket Umroh Kami?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">🏨</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-600">
                Hotel Strategis
              </h3>
              <p className="text-gray-600 text-center">
                Hotel dekat Masjidil Haram dan Masjid Nabawi untuk kemudahan ibadah
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-600">
                Pembimbing Berpengalaman
              </h3>
              <p className="text-gray-600 text-center">
                Didampingi pembimbing yang berpengalaman dan berlisensi resmi
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">💳</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-600">
                Pembayaran Fleksibel
              </h3>
              <p className="text-gray-600 text-center">
                Sistem pembayaran cicilan yang mudah dan terjangkau
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Konsultasi Paket Umroh?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Tim kami siap membantu Anda memilih paket yang tepat
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
