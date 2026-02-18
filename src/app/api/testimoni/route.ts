import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.testimoni.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching testimoni:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const item = await prisma.testimoni.create({
      data: {
        nama: body.nama,
        kota: body.kota,
        rating: parseInt(body.rating),
        testimoni: body.testimoni,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating testimoni:', error);
    return NextResponse.json({ error: 'Failed to create data' }, { status: 500 });
  }
}
