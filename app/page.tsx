import Link from "next/link";
import { Mosque, Plane, Globe, CheckCircle, DollarSign, Hotel, Users } from "lucide-react";

export default function Home() {
  const packages = [
    {
      id: 1,
      title: "Umroh Reguler 9 Hari",
      description: "Paket umroh reguler dengan fasilitas lengkap dan nyaman",
      features: ["Hotel Bintang 5", "Makkah 4 Malam", "Madinah 4 Malam", "Visa & Perlengkapan"],
      Icon: Mosque,
    },
    {
      id: 2,
      title: "Umroh Plus Turki 16 Hari",
      description: "Umroh plus wisata religi ke Turki dengan pengalaman tak terlupakan",
      features: ["Hotel Bintang 5", "Umroh + Turki", "City Tour", "Visa & Perlengkapan"],
      Icon: Plane,
    },
    {
      id: 3,
      title: "Paket Wisata Eropa",
      description: "Jelajahi keindahan Eropa dengan paket wisata terlengkap",
      features: ["Hotel Bintang 4", "5 Negara", "Tour Guide", "Visa & Asuransi"],
      Icon: Globe,
    },
  ];

  const features = [
    {
      Icon: CheckCircle,
      title: "Terpercaya",
      description: "Berpengalaman lebih dari 10 tahun melayani jamaah umroh dan wisatawan",
    },
    {
      Icon: DollarSign,
      title: "Harga Terjangkau",
      description: "Paket dengan harga kompetitif dan sistem pembayaran yang fleksibel",
    },
    {
      Icon: Hotel,
      title: "Fasilitas Terbaik",
      description: "Hotel bintang 5, transportasi nyaman, dan pelayanan maksimal",
    },
    {
      Icon: Users,
      title: "Pembimbing Profesional",
      description: "Didampingi pembimbing berpengalaman dan berlisensi resmi",
    },
  ];

  const testimonials = [
    {
      name: "Ibu Siti Aminah",
      text: "Alhamdulillah, perjalanan umroh bersama DzawaniTravel sangat menyenangkan. Pelayanan ramah dan profesional.",
      rating: 5,
    },
    {
      name: "Bapak Ahmad Fauzi",
      text: "Paket umroh plus Turki sangat memuaskan. Semua terorganisir dengan baik. Recommended!",
      rating: 5,
    },
    {
      name: "Ibu Fatimah",
      text: "Pengalaman terbaik! Hotel nyaman, makanan enak, dan pembimbing sangat membantu. Terima kasih DzawaniTravel.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wujudkan Impian Umroh & Travel Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Bersama DzawaniTravel, mitra terpercaya untuk perjalanan ibadah dan wisata Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/paket-umroh"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
              >
                Lihat Paket Umroh
              </Link>
              <Link
                href="/kontak"
                className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200 border-2 border-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Mengapa Memilih DzawaniTravel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  <feature.Icon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-purple-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Paket Pilihan Kami
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <pkg.Icon className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg
                          className="h-5 w-5 text-purple-600 mr-2"
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
                  <Link
                    href="/kontak"
                    className="block text-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Testimoni Pelanggan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-purple-600">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
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
