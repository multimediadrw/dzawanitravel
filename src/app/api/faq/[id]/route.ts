import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const item = await prisma.fAQ.update({
      where: { id: params.id },
      data: {
        pertanyaan: body.pertanyaan,
        jawaban: body.jawaban,
        kategori: body.kategori,
        urutan: parseInt(body.urutan),
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error updating FAQ:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.fAQ.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}
