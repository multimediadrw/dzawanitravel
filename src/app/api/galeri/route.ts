import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.galeri.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching galeri:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const item = await prisma.galeri.create({
      data: {
        url: body.url,
        caption: body.caption,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating galeri:', error);
    return NextResponse.json({ error: 'Failed to create data' }, { status: 500 });
  }
}
