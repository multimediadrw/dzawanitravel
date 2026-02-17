import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-purple" />
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container-main mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Siap Mewujudkan Impian
            <br />
            <span className="text-magenta-light">Umroh Anda?</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
            Jangan tunda lagi! Daftarkan diri Anda sekarang dan rasakan
            pengalaman ibadah umroh yang tak terlupakan bersama Dzawani Travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/paket-umroh"
              className="bg-magenta text-white font-bold py-4 px-10 rounded-full hover:bg-magenta-dark transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Pilih Paket Sekarang
            </Link>
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
            >
              Chat WhatsApp
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}
