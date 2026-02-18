import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const reservasi = await prisma.reservasi.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(reservasi);
  } catch (error) {
    console.error("Error fetching reservasi:", error);
    return NextResponse.json(
      { error: "Failed to fetch reservasi" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      nama_lengkap,
      email,
      no_telepon,
      alamat,
      paket_id,
      jumlah_jamaah,
      tanggal_keberangkatan,
      catatan,
    } = body;

    // Validasi input
    if (
      !nama_lengkap ||
      !email ||
      !no_telepon ||
      !alamat ||
      !paket_id ||
      !jumlah_jamaah ||
      !tanggal_keberangkatan
    ) {
      return NextResponse.json(
        { error: "Semua field wajib harus diisi" },
        { status: 400 }
      );
    }

    // Get paket info
    const paket = await prisma.paketUmroh.findUnique({
      where: { id: paket_id },
    });

    if (!paket) {
      return NextResponse.json(
        { error: "Paket tidak ditemukan" },
        { status: 404 }
      );
    }

    // Create reservasi
    const reservasi = await prisma.reservasi.create({
      data: {
        namaLengkap: nama_lengkap,
        email,
        noTelepon: no_telepon,
        alamat,
        paketId: paket_id,
        paketNama: paket.nama,
        jumlahJamaah: parseInt(jumlah_jamaah),
        tanggalKeberangkatan: tanggal_keberangkatan,
        catatan: catatan || null,
        status: "pending",
      },
    });

    return NextResponse.json(reservasi, { status: 201 });
  } catch (error) {
    console.error("Error creating reservasi:", error);
    return NextResponse.json(
      { error: "Failed to create reservasi" },
      { status: 500 }
    );
  }
}
