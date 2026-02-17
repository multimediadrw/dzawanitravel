export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Izin Resmi Kemenag",
      description:
        "Terdaftar dan berizin resmi dari Kementerian Agama Republik Indonesia untuk penyelenggaraan ibadah umroh.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Pembimbing Berpengalaman",
      description:
        "Ustadz dan pembimbing yang berpengalaman siap mendampingi ibadah Anda dari awal hingga akhir perjalanan.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Hotel Dekat Masjidil Haram",
      description:
        "Akomodasi hotel bintang 4 & 5 dengan lokasi strategis dekat Masjidil Haram dan Masjid Nabawi.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Harga Transparan",
      description:
        "Tanpa biaya tersembunyi. Semua biaya sudah termasuk dalam paket yang ditawarkan dengan harga yang amanah.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Penerbangan Langsung",
      description:
        "Penerbangan langsung dengan maskapai terpercaya untuk kenyamanan perjalanan Anda ke Tanah Suci.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pelayanan Sepenuh Hati",
      description:
        "Tim kami siap melayani 24/7 dengan dedikasi penuh untuk memastikan kenyamanan ibadah Anda.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-magenta/10 text-magenta font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Mengapa Memilih{" "}
            <span className="text-gradient">Dzawani Travel?</span>
          </h2>
          <p className="text-grey-medium text-lg">
            Kami berkomitmen memberikan pelayanan terbaik untuk perjalanan ibadah
            umroh Anda ke Tanah Suci.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-cream/50 hover:bg-white hover:shadow-xl border border-transparent hover:border-magenta/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-magenta/10 text-magenta flex items-center justify-center mb-5 group-hover:bg-magenta group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-purple mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
