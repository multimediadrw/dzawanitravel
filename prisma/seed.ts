import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Seed Paket Umroh
  console.log('📦 Seeding Paket Umroh...')
  
  const paketUmroh1 = await prisma.paketUmroh.upsert({
    where: { id: 'seed-paket-1' },
    update: {},
    create: {
      id: 'seed-paket-1',
      nama: 'Umroh Reguler',
      harga: 25500000,
      durasi: '9 Hari',
      maskapai: 'Penerbangan PP',
      hotel: 'Hotel Bintang 4',
      deskripsi: 'Paket umroh reguler dengan fasilitas lengkap. Termasuk penerbangan PP, hotel bintang 4, makan 3x sehari (catering), visa umroh, pembimbing ibadah, transportasi AC, dan ziarah Madinah & Makkah.',
    },
  })

  const paketUmroh2 = await prisma.paketUmroh.upsert({
    where: { id: 'seed-paket-2' },
    update: {},
    create: {
      id: 'seed-paket-2',
      nama: 'Umroh Plus',
      harga: 32500000,
      durasi: '12 Hari',
      maskapai: 'Penerbangan PP',
      hotel: 'Hotel Bintang 5 (Dekat Haram)',
      deskripsi: 'Paket umroh plus dengan hotel bintang 5 dekat Haram. Termasuk penerbangan PP, hotel bintang 5, makan 3x sehari (prasmanan), visa umroh, pembimbing ibadah senior, transportasi VIP, city tour Jeddah, dan ziarah lengkap. Best Seller!',
    },
  })

  const paketUmroh3 = await prisma.paketUmroh.upsert({
    where: { id: 'seed-paket-3' },
    update: {},
    create: {
      id: 'seed-paket-3',
      nama: 'Umroh VIP',
      harga: 45000000,
      durasi: '12 Hari',
      maskapai: 'Penerbangan Bisnis Class',
      hotel: 'Hotel Bintang 5 (View Haram)',
      deskripsi: 'Paket umroh VIP dengan fasilitas premium dan pelayanan eksklusif. Termasuk penerbangan bisnis class, hotel bintang 5 dengan view Haram, makan premium, visa umroh fast track, pembimbing pribadi, transportasi private, laundry service, dan oleh-oleh eksklusif.',
    },
  })

  console.log(`✅ Created ${paketUmroh1.nama}, ${paketUmroh2.nama}, ${paketUmroh3.nama}`)

  // Seed Galeri
  console.log('🖼️  Seeding Galeri...')
  
  const galeriItems = [
    { id: 'seed-galeri-1', url: '/galeri/img1.jpg', caption: 'Jamaah berkumpul di depan Masjidil Haram' },
    { id: 'seed-galeri-2', url: '/galeri/img2.jpg', caption: 'Pemandangan malam Masjidil Haram dengan jamaah berseragam' },
    { id: 'seed-galeri-3', url: '/galeri/img3.jpg', caption: 'Jamaah di area tawaf Masjidil Haram malam hari' },
    { id: 'seed-galeri-4', url: '/galeri/img4.jpg', caption: 'Jamaah berdoa di Masjidil Haram' },
    { id: 'seed-galeri-5', url: '/galeri/img5.jpg', caption: 'Jamaah di depan pintu Masjidil Haram' },
    { id: 'seed-galeri-6', url: '/galeri/img6.jpg', caption: 'Pemandangan Abraj Al Bait Clock Tower' },
    { id: 'seed-galeri-7', url: '/galeri/img7.jpg', caption: 'Jamaah berfoto di area Masjidil Haram' },
    { id: 'seed-galeri-8', url: '/galeri/img8.jpg', caption: 'Jamaah berseragam di area tawaf malam hari' },
  ]

  for (const item of galeriItems) {
    await prisma.galeri.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    })
  }

  console.log(`✅ Created ${galeriItems.length} galeri items`)

  // Seed Testimoni
  console.log('💬 Seeding Testimoni...')
  
  const testimoniItems = [
    {
      id: 'seed-testimoni-1',
      nama: 'Hj. Siti Aminah',
      kota: 'Jakarta',
      rating: 5,
      testimoni: 'Alhamdulillah, perjalanan umroh bersama Dzawani Travel sangat berkesan. Pelayanan luar biasa, hotel dekat Masjidil Haram, dan pembimbing yang sangat sabar. Jazakallahu khairan!',
      tanggal: new Date('2024-01-15'),
    },
    {
      id: 'seed-testimoni-2',
      nama: 'H. Ahmad Fauzi',
      kota: 'Bandung',
      rating: 5,
      testimoni: 'Sudah 2 kali umroh bersama Dzawani Travel. Selalu puas dengan pelayanannya. Harga transparan, tidak ada biaya tersembunyi. Insya Allah akan kembali lagi.',
      tanggal: new Date('2024-02-10'),
    },
    {
      id: 'seed-testimoni-3',
      nama: 'Ustadzah Nur Halimah',
      kota: 'Surabaya',
      rating: 5,
      testimoni: 'Pengalaman spiritual yang tak terlupakan. Tim Dzawani Travel sangat profesional dan penuh perhatian. Semua kebutuhan jamaah terpenuhi dengan baik.',
      tanggal: new Date('2024-03-05'),
    },
    {
      id: 'seed-testimoni-4',
      nama: 'Bpk. Ridwan & Keluarga',
      kota: 'Yogyakarta',
      rating: 5,
      testimoni: 'Kami sekeluarga sangat puas. Anak-anak juga dilayani dengan baik. Akomodasi dan transportasi sangat nyaman. Terima kasih Dzawani Travel!',
      tanggal: new Date('2024-03-20'),
    },
  ]

  for (const item of testimoniItems) {
    await prisma.testimoni.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    })
  }

  console.log(`✅ Created ${testimoniItems.length} testimoni items`)

  // Seed FAQ
  console.log('❓ Seeding FAQ...')
  
  const faqItems = [
    {
      id: 'seed-faq-1',
      pertanyaan: 'Apa saja persyaratan untuk mendaftar umroh?',
      jawaban: 'Persyaratan umroh meliputi: KTP asli, Kartu Keluarga, Paspor dengan masa berlaku minimal 7 bulan, Pas foto 4x6 (10 lembar), Buku vaksinasi meningitis, dan Surat keterangan sehat dari dokter.',
      kategori: 'Pendaftaran',
      urutan: 1,
    },
    {
      id: 'seed-faq-2',
      pertanyaan: 'Berapa lama proses pengurusan visa umroh?',
      jawaban: 'Proses pengurusan visa umroh biasanya memakan waktu 2-4 minggu setelah semua dokumen lengkap. Kami akan menginformasikan perkembangan proses visa kepada jamaah secara berkala.',
      kategori: 'Pendaftaran',
      urutan: 2,
    },
    {
      id: 'seed-faq-3',
      pertanyaan: 'Apakah ada sistem pembayaran cicilan?',
      jawaban: 'Ya, kami menyediakan sistem pembayaran cicilan dengan tenor yang fleksibel. Jamaah dapat melakukan pembayaran DP minimal 30% dan sisanya dapat dicicil hingga 1 bulan sebelum keberangkatan.',
      kategori: 'Pembayaran',
      urutan: 3,
    },
    {
      id: 'seed-faq-4',
      pertanyaan: 'Apa yang harus dibawa saat umroh?',
      jawaban: 'Barang yang perlu dibawa antara lain: Pakaian ihram, pakaian sehari-hari yang sopan, sandal, obat-obatan pribadi, perlengkapan mandi, tas kecil untuk ziarah, dan uang saku secukupnya.',
      kategori: 'Keberangkatan',
      urutan: 4,
    },
    {
      id: 'seed-faq-5',
      pertanyaan: 'Apakah ada pembimbing yang mendampingi selama di Tanah Suci?',
      jawaban: 'Ya, setiap rombongan akan didampingi oleh pembimbing ibadah yang berpengalaman. Pembimbing akan membantu jamaah dalam pelaksanaan ibadah umroh dan memberikan bimbingan spiritual selama di Tanah Suci.',
      kategori: 'Layanan',
      urutan: 5,
    },
  ]

  for (const item of faqItems) {
    await prisma.fAQ.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    })
  }

  console.log(`✅ Created ${faqItems.length} FAQ items`)

  console.log('✨ Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
