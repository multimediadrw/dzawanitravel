import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const item = await prisma.testimoni.update({
      where: { id },
      data: {
        nama: body.nama,
        kota: body.kota,
        rating: parseInt(body.rating),
        testimoni: body.testimoni,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error updating testimoni:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.testimoni.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting testimoni:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}
