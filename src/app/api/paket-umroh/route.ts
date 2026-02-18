import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const pakets = await prisma.paketUmroh.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(pakets);
  } catch (error) {
    console.error('Error fetching paket umroh:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const paket = await prisma.paketUmroh.create({
      data: {
        nama: body.nama,
        harga: parseInt(body.harga),
        durasi: body.durasi,
        maskapai: body.maskapai,
        hotel: body.hotel,
        deskripsi: body.deskripsi,
      },
    });
    return NextResponse.json(paket);
  } catch (error) {
    console.error('Error creating paket umroh:', error);
    return NextResponse.json({ error: 'Failed to create data' }, { status: 500 });
  }
}
