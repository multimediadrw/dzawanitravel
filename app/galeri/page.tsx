export default function Galeri() {
  const galleries = [
    {
      category: "Umroh",
      images: [
        { id: 1, title: "Masjidil Haram", emoji: "🕌" },
        { id: 2, title: "Ka'bah", emoji: "🕋" },
        { id: 3, title: "Masjid Nabawi", emoji: "🕌" },
        { id: 4, title: "Jabal Rahmah", emoji: "⛰️" },
        { id: 5, title: "Jamaah Umroh", emoji: "👥" },
        { id: 6, title: "Ziarah Madinah", emoji: "🚶" },
      ],
    },
    {
      category: "Wisata Turki",
      images: [
        { id: 7, title: "Cappadocia", emoji: "🎈" },
        { id: 8, title: "Blue Mosque", emoji: "🕌" },
        { id: 9, title: "Pamukkale", emoji: "🏔️" },
        { id: 10, title: "Bosphorus", emoji: "🌉" },
        { id: 11, title: "Hot Air Balloon", emoji: "🎈" },
        { id: 12, title: "Istanbul", emoji: "🏙️" },
      ],
    },
    {
      category: "Wisata Eropa",
      images: [
        { id: 13, title: "Eiffel Tower", emoji: "🗼" },
        { id: 14, title: "Amsterdam Canal", emoji: "🚤" },
        { id: 15, title: "Swiss Alps", emoji: "🏔️" },
        { id: 16, title: "Brussels", emoji: "🏛️" },
        { id: 17, title: "Keukenhof", emoji: "🌷" },
        { id: 18, title: "Cologne Cathedral", emoji: "⛪" },
      ],
    },
    {
      category: "Wisata Asia",
      images: [
        { id: 19, title: "Tokyo Tower", emoji: "🗼" },
        { id: 20, title: "Seoul Tower", emoji: "🏯" },
        { id: 21, title: "Burj Khalifa", emoji: "🏙️" },
        { id: 22, title: "Mount Fuji", emoji: "🗻" },
        { id: 23, title: "Nami Island", emoji: "🌳" },
        { id: 24, title: "Dubai Mall", emoji: "🏬" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri</h1>
            <p className="text-xl text-purple-100">
              Dokumentasi perjalanan jamaah dan wisatawan DzawaniTravel
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleries.map((gallery, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {gallery.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {gallery.images.map((image) => (
                  <div
                    key={image.id}
                    className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="aspect-square flex flex-col items-center justify-center p-4 text-white">
                      <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {image.emoji}
                      </div>
                      <p className="text-sm font-medium text-center">{image.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Video Dokumentasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 aspect-video flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-2">▶️</div>
                    <p className="text-sm">Video {item}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Dokumentasi Perjalanan {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lihat keseruan perjalanan jamaah dan wisatawan bersama DzawaniTravel
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Photos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Momen Berharga Jamaah Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 aspect-video flex items-center justify-center text-white">
                <div className="text-8xl">📸</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &quot;Alhamdulillah, perjalanan umroh yang sangat berkesan. Semua fasilitas 
                  sangat baik dan pembimbing sangat membantu. Terima kasih DzawaniTravel!&quot;
                </p>
                <p className="font-semibold text-purple-600">- Ibu Siti Aminah</p>
                <p className="text-gray-500 text-sm">Jamaah Umroh Reguler 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 aspect-video flex items-center justify-center text-white">
                <div className="text-8xl">📸</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  &quot;Wisata Turki bersama DzawaniTravel sangat menyenangkan. Destinasi 
                  lengkap, hotel bagus, dan tour guide sangat informatif. Highly recommended!&quot;
                </p>
                <p className="font-semibold text-purple-600">- Bapak Ahmad Fauzi</p>
                <p className="text-gray-500 text-sm">Peserta Wisata Turki 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ingin Menjadi Bagian dari Perjalanan Kami?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Bergabunglah dengan ribuan jamaah dan wisatawan yang telah merasakan pengalaman terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/paket-umroh"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
            >
              Lihat Paket Umroh
            </a>
            <a
              href="/paket-travel"
              className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200 border-2 border-white"
            >
              Lihat Paket Travel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
