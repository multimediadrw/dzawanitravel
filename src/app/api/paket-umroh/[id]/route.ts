import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const paket = await prisma.paketUmroh.update({
      where: { id: params.id },
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
    console.error('Error updating paket umroh:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.paketUmroh.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting paket umroh:', error);
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}
