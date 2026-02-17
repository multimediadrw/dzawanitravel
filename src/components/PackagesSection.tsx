import Link from "next/link";

const packages = [
  {
    name: "Umroh Reguler",
    duration: "9 Hari",
    price: "25.5",
    features: [
      "Penerbangan PP",
      "Hotel Bintang 4",
      "Makan 3x sehari (Catering)",
      "Visa Umroh",
      "Pembimbing Ibadah",
      "Transportasi AC",
      "Ziarah Madinah & Makkah",
    ],
    popular: false,
    badge: null,
  },
  {
    name: "Umroh Plus",
    duration: "12 Hari",
    price: "32.5",
    features: [
      "Penerbangan PP",
      "Hotel Bintang 5 (Dekat Haram)",
      "Makan 3x sehari (Prasmanan)",
      "Visa Umroh",
      "Pembimbing Ibadah Senior",
      "Transportasi VIP",
      "City Tour Jeddah",
      "Ziarah Lengkap",
    ],
    popular: true,
    badge: "Best Seller",
  },
  {
    name: "Umroh VIP",
    duration: "12 Hari",
    price: "45.0",
    features: [
      "Penerbangan Bisnis Class",
      "Hotel Bintang 5 (View Haram)",
      "Makan Premium",
      "Visa Umroh Fast Track",
      "Pembimbing Pribadi",
      "Transportasi Private",
      "Laundry Service",
      "Oleh-oleh Eksklusif",
    ],
    popular: false,
    badge: "VIP",
  },
];

export default function PackagesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-purple/10 text-purple font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Paket Umroh
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pilih Paket <span className="text-gradient">Terbaik</span> Anda
          </h2>
          <p className="text-grey-medium text-lg">
            Berbagai pilihan paket umroh yang dapat disesuaikan dengan kebutuhan
            dan budget Anda.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card-package relative ${
                pkg.popular ? "ring-2 ring-magenta lg:scale-105" : ""
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                    pkg.badge === "VIP" ? "bg-gold" : "bg-magenta"
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
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-purple"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    pkg.popular ? "text-white/70" : "text-grey-medium"
                  }`}
                >
                  {pkg.duration}
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

                <Link
                  href="/kontak"
                  className={`block text-center font-bold py-3 px-6 rounded-full transition-all duration-300 ${
                    pkg.popular
                      ? "btn-primary w-full"
                      : "btn-outline w-full"
                  }`}
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/paket-umroh"
            className="inline-flex items-center gap-2 text-magenta font-bold hover:text-magenta-dark transition-colors"
          >
            Lihat Semua Paket
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
