import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paket Umroh - Dzawani Travel Indonesia",
  description:
    "Pilih paket umroh terbaik dari Dzawani Travel Indonesia. Tersedia paket reguler, plus, VIP, dan Ramadhan dengan harga terjangkau.",
};

const allPackages = [
  {
    name: "Umroh Reguler",
    duration: "9 Hari",
    price: "25.5",
    description: "Paket umroh dengan fasilitas standar yang nyaman dan terjangkau.",
    features: [
      "Penerbangan PP Economy Class",
      "Hotel Bintang 4 (±500m dari Haram)",
      "Makan 3x sehari (Catering)",
      "Visa Umroh",
      "Pembimbing Ibadah",
      "Transportasi Bus AC",
      "Ziarah Madinah & Makkah",
      "Manasik Umroh",
      "Perlengkapan Umroh",
      "Air Zamzam 5 Liter",
    ],
    popular: false,
    badge: null,
    color: "purple",
  },
  {
    name: "Umroh Plus",
    duration: "12 Hari",
    price: "32.5",
    description: "Paket umroh premium dengan fasilitas lebih lengkap dan hotel dekat Haram.",
    features: [
      "Penerbangan PP Economy Class",
      "Hotel Bintang 5 (Dekat Masjidil Haram)",
      "Makan 3x sehari (Prasmanan/Buffet)",
      "Visa Umroh",
      "Pembimbing Ibadah Senior",
      "Transportasi VIP Bus",
      "City Tour Jeddah",
      "Ziarah Lengkap Madinah & Makkah",
      "Manasik Umroh 2x",
      "Perlengkapan Umroh Premium",
      "Air Zamzam 10 Liter",
      "Handling & Porter",
    ],
    popular: true,
    badge: "Best Seller",
    color: "magenta",
  },
  {
    name: "Umroh VIP",
    duration: "12 Hari",
    price: "45.0",
    description: "Paket umroh eksklusif dengan pelayanan kelas satu dan fasilitas mewah.",
    features: [
      "Penerbangan Bisnis Class",
      "Hotel Bintang 5 (View Masjidil Haram)",
      "Makan Premium (Menu Pilihan)",
      "Visa Umroh Fast Track",
      "Pembimbing Ibadah Pribadi",
      "Transportasi Private",
      "City Tour Jeddah & Taif",
      "Ziarah Lengkap VIP",
      "Manasik Umroh Private",
      "Perlengkapan Umroh Eksklusif",
      "Air Zamzam 10 Liter",
      "Laundry Service",
      "Oleh-oleh Eksklusif",
    ],
    popular: false,
    badge: "VIP",
    color: "gold",
  },
  {
    name: "Umroh Ramadhan",
    duration: "14 Hari",
    price: "38.0",
    description: "Paket spesial umroh di bulan Ramadhan dengan program ibadah intensif.",
    features: [
      "Penerbangan PP Economy Class",
      "Hotel Bintang 5 (Dekat Haram)",
      "Makan Sahur & Buka Puasa",
      "Visa Umroh",
      "Pembimbing Ibadah Senior",
      "Transportasi VIP",
      "Program Tadarus Al-Quran",
      "Itikaf di Masjidil Haram",
      "Ziarah Lengkap",
      "Manasik Umroh",
      "Perlengkapan Umroh",
      "Air Zamzam 10 Liter",
    ],
    popular: false,
    badge: "Ramadhan",
    color: "purple",
  },
];

export default function PaketUmrohPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-purple" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative container-main mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Paket Umroh
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Pilih paket umroh yang sesuai dengan kebutuhan dan budget Anda.
            Semua paket sudah termasuk penerbangan, hotel, makan, dan visa.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {allPackages.map((pkg, index) => (
              <div
                key={index}
                className={`card-package relative ${
                  pkg.popular ? "ring-2 ring-magenta" : ""
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                      pkg.badge === "VIP"
                        ? "bg-gold"
                        : pkg.badge === "Ramadhan"
                        ? "bg-success"
                        : "bg-magenta"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Header */}
                <div
                  className={`p-8 ${
                    pkg.popular ? "gradient-purple text-white" : "bg-purple/5"
                  }`}
                >
                  <h2
                    className={`text-2xl font-bold mb-2 ${
                      pkg.popular ? "text-white" : "text-purple"
                    }`}
                  >
                    {pkg.name}
                  </h2>
                  <p
                    className={`text-sm mb-2 ${
                      pkg.popular ? "text-white/80" : "text-charcoal/70"
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <p
                    className={`text-sm mb-4 ${
                      pkg.popular ? "text-white/70" : "text-grey-medium"
                    }`}
                  >
                    Durasi: {pkg.duration}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-sm ${
                        pkg.popular ? "text-white/70" : "text-grey-medium"
                      }`}
                    >
                      IDR
                    </span>
                    <span
                      className={`text-4xl font-extrabold ${
                        pkg.popular ? "text-gold-light" : "text-magenta"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm ${
                        pkg.popular ? "text-white/70" : "text-grey-medium"
                      }`}
                    >
                      Jt/pax
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <h3 className="font-bold text-purple mb-4">
                    Fasilitas Termasuk:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-success shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-charcoal/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      href="/kontak"
                      className={`flex-1 text-center font-bold py-3 px-6 rounded-full transition-all duration-300 ${
                        pkg.popular ? "btn-primary" : "btn-outline"
                      }`}
                    >
                      Daftar Sekarang
                    </Link>
                    <Link
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-success/10 text-success hover:bg-success hover:text-white transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 p-6 bg-white rounded-2xl border border-grey-light/50">
            <h3 className="font-bold text-purple mb-3">Catatan Penting:</h3>
            <ul className="space-y-2 text-charcoal/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-magenta">•</span>
                Harga dapat berubah sewaktu-waktu sesuai dengan kebijakan maskapai dan hotel.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magenta">•</span>
                Harga belum termasuk paspor, suntik meningitis, dan pengeluaran pribadi.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magenta">•</span>
                Tersedia cicilan/installment untuk semua paket. Hubungi kami untuk info lebih lanjut.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-magenta">•</span>
                Paket custom tersedia sesuai permintaan. Silakan konsultasi dengan tim kami.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
