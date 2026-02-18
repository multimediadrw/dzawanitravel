import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.fAQ.findMany({
      orderBy: { urutan: 'asc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const item = await prisma.fAQ.create({
      data: {
        pertanyaan: body.pertanyaan,
        jawaban: body.jawaban,
        kategori: body.kategori,
        urutan: parseInt(body.urutan),
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating FAQ:', error);
    return NextResponse.json({ error: 'Failed to create data' }, { status: 500 });
  }
}
