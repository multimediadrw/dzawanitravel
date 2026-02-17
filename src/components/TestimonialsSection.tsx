"use client";

const testimonials = [
  {
    name: "Hj. Siti Aminah",
    location: "Jakarta",
    text: "Alhamdulillah, perjalanan umroh bersama Dzawani Travel sangat berkesan. Pelayanan luar biasa, hotel dekat Masjidil Haram, dan pembimbing yang sangat sabar. Jazakallahu khairan!",
    rating: 5,
  },
  {
    name: "H. Ahmad Fauzi",
    location: "Bandung",
    text: "Sudah 2 kali umroh bersama Dzawani Travel. Selalu puas dengan pelayanannya. Harga transparan, tidak ada biaya tersembunyi. Insya Allah akan kembali lagi.",
    rating: 5,
  },
  {
    name: "Ustadzah Nur Halimah",
    location: "Surabaya",
    text: "Pengalaman spiritual yang tak terlupakan. Tim Dzawani Travel sangat profesional dan penuh perhatian. Semua kebutuhan jamaah terpenuhi dengan baik.",
    rating: 5,
  },
  {
    name: "Bpk. Ridwan & Keluarga",
    location: "Yogyakarta",
    text: "Kami sekeluarga sangat puas. Anak-anak juga dilayani dengan baik. Akomodasi dan transportasi sangat nyaman. Terima kasih Dzawani Travel!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold/10 text-gold font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Apa Kata <span className="text-gradient">Jamaah Kami?</span>
          </h2>
          <p className="text-grey-medium text-lg">
            Kepuasan jamaah adalah prioritas utama kami. Berikut pengalaman
            mereka bersama Dzawani Travel.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-cream/50 border border-grey-light/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
                  <span className="text-purple font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-purple">{testimonial.name}</p>
                  <p className="text-sm text-grey-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
