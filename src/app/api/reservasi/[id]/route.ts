import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    const reservasi = await prisma.reservasi.update({
      where: { id: params.id },
      data: {
        status,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(reservasi);
  } catch (error) {
    console.error("Error updating reservasi:", error);
    return NextResponse.json(
      { error: "Failed to update reservasi" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.reservasi.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Reservasi deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservasi:", error);
    return NextResponse.json(
      { error: "Failed to delete reservasi" },
      { status: 500 }
    );
  }
}
