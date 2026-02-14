import Link from "next/link";
import { Plane, Phone } from "lucide-react";

export default function PaketTravel() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Plane className="w-20 h-20" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Travel</h1>
            <p className="text-xl text-purple-100 mb-8">
              Paket travel kami sedang dalam persiapan
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Segera Hadir
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kami sedang menyiapkan paket-paket travel terbaik untuk Anda. Nantikan informasi selengkapnya!
          </p>
          <div className="bg-purple-50 rounded-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Untuk informasi lebih lanjut mengenai paket travel atau jika Anda memiliki destinasi impian, silakan hubungi kami.
            </p>
          </div>
          <Link
            href="/kontak"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tertarik dengan Paket Umroh?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Lihat paket umroh kami yang sudah tersedia
          </p>
          <Link
            href="/paket-umroh"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
          >
            Lihat Paket Umroh
          </Link>
        </div>
      </section>
    </div>
  );
}
