import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri - Dzawani Travel Indonesia",
  description:
    "Galeri foto perjalanan umroh bersama Dzawani Travel Indonesia. Lihat momen-momen indah jamaah kami di Tanah Suci.",
};

const galleryItems = [
  {
    title: "Masjidil Haram",
    description: "Keindahan Masjidil Haram di malam hari",
    color: "from-purple to-purple-dark",
    icon: "🕋",
  },
  {
    title: "Masjid Nabawi",
    description: "Masjid Nabawi yang megah di Madinah",
    color: "from-magenta to-magenta-dark",
    icon: "🕌",
  },
  {
    title: "Jamaah Dzawani",
    description: "Kebersamaan jamaah dalam perjalanan",
    color: "from-purple-light to-purple",
    icon: "👥",
  },
  {
    title: "Hotel Makkah",
    description: "Akomodasi nyaman dekat Haram",
    color: "from-gold to-gold-light",
    icon: "🏨",
  },
  {
    title: "Tawaf",
    description: "Momen sakral tawaf di Ka'bah",
    color: "from-purple-dark to-purple",
    icon: "🤲",
  },
  {
    title: "Ziarah",
    description: "Perjalanan ziarah ke tempat bersejarah",
    color: "from-magenta-dark to-magenta",
    icon: "🌙",
  },
  {
    title: "Manasik Umroh",
    description: "Persiapan manasik sebelum keberangkatan",
    color: "from-purple to-magenta",
    icon: "📖",
  },
  {
    title: "Keberangkatan",
    description: "Momen keberangkatan jamaah ke Tanah Suci",
    color: "from-magenta to-purple",
    icon: "✈️",
  },
];

export default function GaleriPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-purple" />
        <div className="relative container-main mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Galeri
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Momen-momen indah perjalanan ibadah umroh bersama Dzawani Travel
            Indonesia.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 text-center p-8 bg-white rounded-2xl shadow-sm border border-grey-light/30">
            <div className="w-16 h-16 rounded-full bg-magenta/10 text-magenta flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-purple mb-2">
              Lebih Banyak Foto?
            </h3>
            <p className="text-charcoal/70 mb-4">
              Kunjungi Instagram kami untuk melihat lebih banyak foto dan video
              perjalanan umroh.
            </p>
            <a
              href="https://instagram.com/dzawanitravel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @dzawanitravel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
