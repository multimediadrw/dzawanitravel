import Link from "next/link";

export default function PaketTravel() {
  const travelPackages = [
    {
      id: 1,
      title: "Wisata Eropa 10 Hari",
      price: "Rp 35.000.000",
      duration: "10 Hari",
      destination: "5 Negara Eropa",
      description: "Jelajahi keindahan Eropa dengan mengunjungi Paris, Amsterdam, Brussels, Cologne, dan Swiss",
      features: [
        "Hotel Bintang 4",
        "Paris - Amsterdam - Brussels - Cologne - Swiss",
        "City Tour Lengkap",
        "Eiffel Tower, Keukenhof, Atomium",
        "Visa Schengen",
        "Tiket Pesawat PP",
        "Makan 2x Sehari",
        "Tour Guide Profesional",
      ],
      image: "🗼",
    },
    {
      id: 2,
      title: "Wisata Jepang 8 Hari",
      price: "Rp 28.000.000",
      duration: "8 Hari",
      destination: "Tokyo - Osaka - Kyoto",
      description: "Nikmati keindahan sakura dan budaya Jepang yang memukau",
      features: [
        "Hotel Bintang 4",
        "Tokyo - Osaka - Kyoto - Mt. Fuji",
        "Disneyland Tokyo",
        "Universal Studios Japan",
        "Visa Jepang",
        "Tiket Pesawat PP",
        "Makan 2x Sehari",
        "Tour Guide Berbahasa Indonesia",
      ],
      image: "🗾",
    },
    {
      id: 3,
      title: "Wisata Korea 7 Hari",
      price: "Rp 22.000.000",
      duration: "7 Hari",
      destination: "Seoul - Jeju",
      description: "Rasakan pengalaman K-Drama di negeri ginseng dengan destinasi menarik",
      features: [
        "Hotel Bintang 4",
        "Seoul - Nami Island - Jeju",
        "Everland Theme Park",
        "N Seoul Tower",
        "Visa Korea",
        "Tiket Pesawat PP",
        "Makan 2x Sehari",
        "Tour Guide Berpengalaman",
      ],
      image: "🏯",
    },
    {
      id: 4,
      title: "Wisata Turki 12 Hari",
      price: "Rp 32.000.000",
      duration: "12 Hari",
      destination: "Istanbul - Cappadocia - Pamukkale",
      description: "Jelajahi keajaiban Turki dari Istanbul hingga Cappadocia",
      features: [
        "Hotel Bintang 4-5",
        "Istanbul - Bursa - Cappadocia - Pamukkale",
        "Hot Air Balloon Cappadocia",
        "Bosphorus Cruise",
        "Visa Turki",
        "Tiket Pesawat PP",
        "Makan 3x Sehari",
        "Tour Guide Profesional",
      ],
      image: "🎈",
    },
    {
      id: 5,
      title: "Wisata Dubai 6 Hari",
      price: "Rp 18.000.000",
      duration: "6 Hari",
      destination: "Dubai - Abu Dhabi",
      description: "Rasakan kemewahan dan modernitas kota Dubai yang spektakuler",
      features: [
        "Hotel Bintang 4",
        "Dubai - Abu Dhabi",
        "Burj Khalifa",
        "Desert Safari",
        "Dubai Mall & Gold Souk",
        "Visa UAE",
        "Tiket Pesawat PP",
        "Makan 2x Sehari",
      ],
      image: "🏙️",
    },
    {
      id: 6,
      title: "Wisata Bali 5 Hari",
      price: "Rp 8.000.000",
      duration: "5 Hari",
      destination: "Bali",
      description: "Nikmati keindahan pulau dewata dengan paket wisata lengkap",
      features: [
        "Hotel Bintang 4",
        "Tanah Lot - Uluwatu - Bedugul",
        "Water Sport Tanjung Benoa",
        "Kintamani Tour",
        "Antar Jemput Bandara",
        "Makan 2x Sehari",
        "Tour Guide Lokal",
        "Tiket Masuk Objek Wisata",
      ],
      image: "🏝️",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Travel Wisata</h1>
            <p className="text-xl text-purple-100">
              Jelajahi destinasi impian Anda bersama DzawaniTravel
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 text-center">
                  <div className="text-5xl mb-3">{pkg.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-purple-100 mb-1">{pkg.duration}</p>
                  <p className="text-sm text-purple-200 mb-3">{pkg.destination}</p>
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
              Keunggulan Paket Travel Kami
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">
                Penerbangan Terbaik
              </h3>
              <p className="text-gray-600 text-sm">
                Maskapai terpercaya dengan jadwal optimal
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">
                Hotel Strategis
              </h3>
              <p className="text-gray-600 text-sm">
                Lokasi hotel dekat pusat wisata
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">
                Itinerary Lengkap
              </h3>
              <p className="text-gray-600 text-sm">
                Destinasi wisata terpopuler tercakup
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">👨‍✈️</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600">
                Guide Berpengalaman
              </h3>
              <p className="text-gray-600 text-sm">
                Tour guide profesional berbahasa Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Menjelajahi Dunia?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Hubungi kami untuk informasi lebih lanjut dan penawaran spesial
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
