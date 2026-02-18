import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get the first (and should be only) konten mitra record
    const konten = await prisma.kontenMitra.findFirst();
    
    // If no record exists, create default one
    if (!konten) {
      const defaultKonten = await prisma.kontenMitra.create({
        data: {
          heroTitle: 'Bergabunglah Sebagai Mitra Dzawani Travel',
          heroSubtitle: 'Raih Penghasilan Tambahan dengan Menjadi Mitra Resmi',
          heroDescription: 'Dapatkan komisi menarik dan berbagai keuntungan dengan bergabung sebagai mitra Dzawani Travel. Bantu lebih banyak orang mewujudkan impian umroh mereka.',
          benefit1Title: 'Komisi Menarik',
          benefit1Desc: 'Dapatkan komisi kompetitif untuk setiap jamaah yang Anda daftarkan',
          benefit2Title: 'Pelatihan Gratis',
          benefit2Desc: 'Akses pelatihan dan materi marketing untuk mendukung kesuksesan Anda',
          benefit3Title: 'Support Penuh',
          benefit3Desc: 'Tim kami siap membantu Anda 24/7 dalam menjalankan kemitraan',
          benefit4Title: 'Sistem Mudah',
          benefit4Desc: 'Platform digital yang memudahkan Anda mengelola jamaah dan komisi',
          ctaTitle: 'Siap Menjadi Mitra Kami?',
          ctaDescription: 'Daftar sekarang dan mulai raih penghasilan tambahan dengan menjadi bagian dari keluarga besar Dzawani Travel',
        },
      });
      return NextResponse.json(defaultKonten);
    }
    
    return NextResponse.json(konten);
  } catch (error) {
    console.error('Error fetching konten mitra:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    // Get the first record
    const existing = await prisma.kontenMitra.findFirst();
    
    if (!existing) {
      // Create if doesn't exist
      const konten = await prisma.kontenMitra.create({
        data: body,
      });
      return NextResponse.json(konten);
    }
    
    // Update existing
    const konten = await prisma.kontenMitra.update({
      where: { id: existing.id },
      data: body,
    });
    return NextResponse.json(konten);
  } catch (error) {
    console.error('Error updating konten mitra:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
