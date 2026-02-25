import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.tabunganUmroh.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching tabungan umroh:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data tabungan umroh" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { namaLengkap, nomorWhatsApp, domisili, rencanaKeberangkatan } = body;

    if (!namaLengkap || !nomorWhatsApp || !domisili || !rencanaKeberangkatan) {
      return NextResponse.json(
        { error: "Semua field wajib harus diisi" },
        { status: 400 }
      );
    }

    const data = await prisma.tabunganUmroh.create({
      data: {
        namaLengkap,
        nomorWhatsApp,
        domisili,
        rencanaKeberangkatan,
        status: "pending",
      },
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating tabungan umroh:", error);
    return NextResponse.json(
      { error: "Gagal menyimpan data tabungan umroh" },
      { status: 500 }
    );
  }
}
