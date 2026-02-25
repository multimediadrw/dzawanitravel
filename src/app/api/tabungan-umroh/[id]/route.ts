import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, catatan, namaLengkap, nomorWhatsApp, domisili, rencanaKeberangkatan } = body;

    const data = await prisma.tabunganUmroh.update({
      where: { id },
      data: {
        ...(status !== undefined && { status }),
        ...(catatan !== undefined && { catatan }),
        ...(namaLengkap !== undefined && { namaLengkap }),
        ...(nomorWhatsApp !== undefined && { nomorWhatsApp }),
        ...(domisili !== undefined && { domisili }),
        ...(rencanaKeberangkatan !== undefined && { rencanaKeberangkatan }),
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating tabungan umroh:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate data tabungan umroh" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.tabunganUmroh.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting tabungan umroh:", error);
    return NextResponse.json(
      { error: "Gagal menghapus data tabungan umroh" },
      { status: 500 }
    );
  }
}
