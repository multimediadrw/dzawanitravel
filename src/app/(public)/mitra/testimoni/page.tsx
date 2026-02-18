interface Testimoni {
  id: string;
  nama: string;
  kota: string;
  rating: number;
  testimoni: string;
  tanggal: string;
}

async function getTestimoni() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://dzawanitravel.vercel.app'}/api/testimoni`, {
      cache: 'no-store', // Always get fresh data
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch testimoni');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching testimoni:', error);
    return [];
  }
}

// Avatar mapping based on name
function getAvatar(nama: string): string {
  const nameLower = nama.toLowerCase();
  if (nameLower.includes('hj.') || nameLower.includes('ustadzah') || nameLower.includes('siti') || nameLower.includes('nur')) {
    return '👩‍💼';
  } else if (nameLower.includes('h.') || nameLower.includes('bpk') || nameLower.includes('ahmad') || nameLower.includes('budi')) {
    return '👨‍💼';
  } else if (nameLower.includes('admin')) {
    return '👤';
  }
  return '👤'; // Default avatar
}

export default async function TestimoniMitra() {
  const testimonials: Testimoni[] = await getTestimoni();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple to-magenta text-white py-24">
        <div className="container-main mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Apa Kata Mitra Kami?
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto">
            Cerita sukses dari para mitra Dzawani Travel di seluruh Indonesia
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-main mx-auto px-4 md:px-8">
          {testimonials.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <p className="text-xl">Belum ada testimoni dari mitra.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple to-magenta rounded-full flex items-center justify-center text-3xl">
                      {getAvatar(testimonial.nama)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple">{testimonial.nama}</h3>
                      <p className="text-gray-500">{testimonial.kota}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.testimoni}"
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    {new Date(testimonial.tanggal).toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-main mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple text-center mb-12">
            Dzawani Travel dalam Angka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-magenta mb-4">500+</div>
              <p className="text-xl text-gray-600">Mitra Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-magenta mb-4">2,000+</div>
              <p className="text-xl text-gray-600">Jamaah Berangkat</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-magenta mb-4">98%</div>
              <p className="text-xl text-gray-600">Kepuasan Mitra</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple to-magenta">
        <div className="container-main mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Jadilah Mitra Sukses Berikutnya!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan mitra yang sudah merasakan manfaatnya
          </p>
          <a
            href="https://wa.me/6208112222254?text=Assalamualaikum%2C%20saya%20ingin%20bergabung%20menjadi%20mitra%20Dzawani%20Travel"
            className="inline-flex items-center gap-2 bg-white text-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
