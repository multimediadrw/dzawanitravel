import Link from "next/link";
import { Plane, MapPin, Calendar, Users, CheckCircle, Phone, Hotel, Award } from "lucide-react";

export default function PaketUmroh() {
  const umrohPackages = [
    {
      id: 1,
      title: "Umroh Plus Singapore",
      date: "7 Agustus 2025",
      availability: "Sisa 4 Seat",
      duration: "12 Hari",
      destinations: ["Makkah", "Madinah", "Singapore"],
      highlights: [
        "Hotel Bintang 5 di Makkah & Madinah",
        "City Tour Singapore",
        "Visa & Perlengkapan Umroh",
        "Muthawif Berpengalaman",
        "Transportasi Full AC",
      ],
      available: true,
    },
    {
      id: 2,
      title: "Umroh Plus Singapore",
      date: "11 Agustus 2025",
      availability: "Tersedia",
      duration: "12 Hari",
      destinations: ["Makkah", "Madinah", "Singapore"],
      highlights: [
        "Hotel Bintang 5 di Makkah & Madinah",
        "City Tour Singapore",
        "Visa & Perlengkapan Umroh",
        "Muthawif Berpengalaman",
        "Transportasi Full AC",
      ],
      available: true,
    },
    {
      id: 3,
      title: "Umroh Reguler",
      date: "21 September 2025",
      availability: "Tersedia",
      duration: "9 Hari",
      destinations: ["Makkah", "Madinah"],
      highlights: [
        "Hotel Bintang 5",
        "Makkah 4 Malam",
        "Madinah 4 Malam",
        "Visa & Perlengkapan",
        "Muthawif Berpengalaman",
      ],
      available: true,
    },
    {
      id: 4,
      title: "Umroh Plus Dubai",
      date: "23 Oktober 2025",
      availability: "Tersedia",
      duration: "14 Hari",
      destinations: ["Makkah", "Madinah", "Dubai"],
      highlights: [
        "Hotel Bintang 5",
        "City Tour Dubai",
        "Burj Khalifa & Dubai Mall",
        "Visa & Perlengkapan",
        "Muthawif Berpengalaman",
      ],
      available: true,
    },
    {
      id: 5,
      title: "Umroh Direct Lion",
      date: "27 Juli 2025",
      availability: "SOLD OUT",
      duration: "9 Hari",
      destinations: ["Makkah", "Madinah"],
      highlights: [
        "Penerbangan Direct Lion Air",
        "Hotel Bintang 5",
        "Makkah 4 Malam",
        "Madinah 4 Malam",
        "Visa & Perlengkapan",
      ],
      available: false,
    },
  ];

  const generalTerms = [
    "Paspor minimal berlaku 7 bulan dari tanggal keberangkatan",
    "Vaksin Meningitis & COVID-19 sesuai ketentuan",
    "Pembayaran dapat dicicil dengan sistem yang fleksibel",
    "Gratis konsultasi persiapan umroh",
    "Pendampingan dari keberangkatan hingga kepulangan",
  ];

  const whyChooseUs = [
    {
      Icon: Hotel,
      title: "Hotel Strategis",
      description: "Hotel dekat Masjidil Haram dan Masjid Nabawi untuk kemudahan ibadah",
    },
    {
      Icon: Users,
      title: "Pembimbing Berpengalaman",
      description: "Didampingi pembimbing yang berpengalaman dan berlisensi resmi",
    },
    {
      Icon: Award,
      title: "Pembayaran Fleksibel",
      description: "Sistem pembayaran cicilan yang mudah dan terjangkau",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Umroh 2025</h1>
            <p className="text-xl text-purple-100">
              Wujudkan impian ibadah umroh Anda bersama DzawaniTravel
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
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 ${
                  !pkg.available ? "opacity-75" : ""
                }`}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Plane className="w-8 h-8" />
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        pkg.available
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {pkg.availability}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center text-purple-100">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{pkg.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Duration */}
                  <div className="flex items-center mb-4 text-gray-700">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>

                  {/* Destinations */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2 text-gray-700">
                      <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                      <span className="font-semibold">Destinasi:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {pkg.destinations.map((dest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Fasilitas:</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  {pkg.available ? (
                    <Link
                      href="/kontak"
                      className="flex items-center justify-center w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Hubungi Kami
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 px-6 py-3 rounded-full font-semibold cursor-not-allowed"
                    >
                      Tidak Tersedia
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Paket Umroh Kami?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <item.Icon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-purple-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Terms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Ketentuan Umum
          </h2>
          <div className="bg-purple-50 rounded-lg p-8">
            <ul className="space-y-4">
              {generalTerms.map((term, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-purple-600 flex-shrink-0" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Informasi Lebih Lanjut?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Tim kami siap membantu Anda memilih paket umroh yang sesuai
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
