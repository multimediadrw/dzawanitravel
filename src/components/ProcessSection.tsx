export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Konsultasi",
      description:
        "Hubungi kami untuk konsultasi gratis mengenai paket umroh yang sesuai dengan kebutuhan Anda.",
    },
    {
      number: "02",
      title: "Pilih Paket",
      description:
        "Pilih paket umroh yang sesuai dengan budget dan preferensi Anda dari berbagai pilihan yang tersedia.",
    },
    {
      number: "03",
      title: "Pendaftaran",
      description:
        "Lengkapi dokumen pendaftaran dan lakukan pembayaran sesuai ketentuan yang berlaku.",
    },
    {
      number: "04",
      title: "Berangkat",
      description:
        "Persiapan manasik dan berangkat ke Tanah Suci dengan tenang dan nyaman bersama kami.",
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-main mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-purple/10 text-purple font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Alur Pendaftaran
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Langkah Mudah <span className="text-gradient">Menuju Umroh</span>
          </h2>
          <p className="text-grey-medium text-lg">
            Proses pendaftaran yang mudah dan transparan untuk kenyamanan Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-grey-light">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-magenta rounded-full" />
                </div>
              )}

              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl font-extrabold text-gradient">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-purple mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
