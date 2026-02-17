import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang Kami - Dzawani Travel Indonesia",
  description:
    "Dzawani Travel Indonesia adalah biro perjalanan umroh terpercaya yang berdiri sejak 2020. Melayani dengan sepenuh hati untuk perjalanan ibadah Anda.",
};

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-purple" />
        <div className="relative container-main mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Tentang Kami
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat Dzawani Travel Indonesia, biro perjalanan umroh
            terpercaya sejak 2020.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-cream flex items-center justify-center shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="Dzawani Travel Indonesia"
                    width={250}
                    height={250}
                    className="w-60 h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-magenta/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple/10 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block bg-magenta/10 text-magenta font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Profil Perusahaan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Dzawani Travel <span className="text-gradient">Indonesia</span>
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  <strong className="text-purple">Dzawani Travel Indonesia</strong> adalah biro
                  perjalanan umroh yang berdiri sejak tahun 2020 dengan komitmen
                  kuat untuk memberikan pelayanan terbaik bagi jamaah yang ingin
                  menunaikan ibadah umroh ke Tanah Suci.
                </p>
                <p>
                  Nama &ldquo;Dzawani&rdquo; diambil dari bahasa Arab yang bermakna
                  &ldquo;keindahan&rdquo; dan &ldquo;kemurnian&rdquo;, mencerminkan visi kami untuk
                  menghadirkan perjalanan ibadah yang indah, bermakna, dan penuh
                  berkah bagi setiap jamaah.
                </p>
                <p>
                  Dengan pengalaman lebih dari 5 tahun dan telah melayani ribuan
                  jamaah, kami terus berkomitmen untuk meningkatkan kualitas
                  pelayanan dan memberikan pengalaman umroh yang tak terlupakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-cream">
        <div className="container-main mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 md:p-10 rounded-2xl bg-white shadow-lg border border-grey-light/30">
              <div className="w-14 h-14 rounded-xl bg-purple/10 text-purple flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple mb-4">Visi</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Menjadi biro perjalanan umroh terdepan dan terpercaya di
                Indonesia yang menghadirkan pengalaman ibadah bermakna dengan
                pelayanan berkualitas tinggi dan harga yang amanah.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 md:p-10 rounded-2xl bg-white shadow-lg border border-grey-light/30">
              <div className="w-14 h-14 rounded-xl bg-magenta/10 text-magenta flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple mb-4">Misi</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-magenta/10 text-magenta flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    1
                  </span>
                  <span>
                    Memberikan pelayanan umroh yang profesional, amanah, dan
                    sepenuh hati.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-magenta/10 text-magenta flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    2
                  </span>
                  <span>
                    Menyediakan paket umroh dengan harga transparan dan
                    terjangkau.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-magenta/10 text-magenta flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    3
                  </span>
                  <span>
                    Menghadirkan pembimbing ibadah yang berpengalaman dan
                    berkompeten.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-magenta/10 text-magenta flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    4
                  </span>
                  <span>
                    Terus berinovasi dalam meningkatkan kualitas layanan dan
                    kepuasan jamaah.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-purple">
        <div className="container-main mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2020", label: "Tahun Berdiri" },
              { value: "1000+", label: "Jamaah Terlayani" },
              { value: "50+", label: "Keberangkatan" },
              { value: "4.9/5", label: "Rating Kepuasan" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-extrabold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-main mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Nilai-Nilai <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-grey-medium text-lg">
              Prinsip yang kami pegang teguh dalam melayani setiap jamaah.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Amanah",
                description:
                  "Menjaga kepercayaan jamaah dengan transparansi dalam setiap aspek pelayanan.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Ikhlas",
                description:
                  "Melayani dengan tulus dan sepenuh hati demi kenyamanan ibadah jamaah.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Profesional",
                description:
                  "Bekerja dengan standar tinggi dan terus meningkatkan kualitas pelayanan.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-cream/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-magenta/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-magenta/10 text-magenta flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-purple mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
