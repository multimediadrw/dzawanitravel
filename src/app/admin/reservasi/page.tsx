"use client";

import { useState, useEffect } from "react";

interface Reservasi {
  id: string;
  namaLengkap: string;
  email: string;
  noTelepon: string;
  alamat: string;
  paketNama: string;
  jumlahJamaah: number;
  tanggalKeberangkatan: string;
  catatan: string | null;
  status: string;
  createdAt: string;
}

export default function AdminReservasiPage() {
  const [reservasiList, setReservasiList] = useState<Reservasi[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReservasi, setSelectedReservasi] = useState<Reservasi | null>(
    null
  );
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    fetchReservasi();
  }, []);

  const fetchReservasi = async () => {
    try {
      const response = await fetch("/api/reservasi");
      const data = await response.json();
      setReservasiList(data);
    } catch (error) {
      console.error("Error fetching reservasi:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/reservasi/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      fetchReservasi();
      setShowDetail(false);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteReservasi = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus reservasi ini?")) return;

    try {
      await fetch(`/api/reservasi/${id}`, {
        method: "DELETE",
      });
      fetchReservasi();
      setShowDetail(false);
    } catch (error) {
      console.error("Error deleting reservasi:", error);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<
      string,
      { bg: string; text: string; label: string }
    > = {
      pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
      dikonfirmasi: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Dikonfirmasi",
      },
      diproses: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        label: "Diproses",
      },
      selesai: { bg: "bg-green-100", text: "text-green-800", label: "Selesai" },
      dibatalkan: { bg: "bg-red-100", text: "text-red-800", label: "Dibatalkan" },
    };

    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        {config.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Kelola Reservasi
        </h1>
        <p className="text-gray-600">
          Kelola semua reservasi paket umroh dari jamaah
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Reservasi</p>
              <p className="text-2xl font-bold text-gray-900">
                {reservasiList.length}
              </p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {reservasiList.filter((r) => r.status === "pending").length}
              </p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Diproses</p>
              <p className="text-2xl font-bold text-purple-600">
                {
                  reservasiList.filter(
                    (r) => r.status === "dikonfirmasi" || r.status === "diproses"
                  ).length
                }
              </p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Selesai</p>
              <p className="text-2xl font-bold text-green-600">
                {reservasiList.filter((r) => r.status === "selesai").length}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Paket
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Jamaah
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Keberangkatan
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reservasiList.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    Belum ada reservasi
                  </td>
                </tr>
              ) : (
                reservasiList.map((reservasi) => (
                  <tr key={reservasi.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {new Date(reservasi.createdAt).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">
                        {reservasi.namaLengkap}
                      </div>
                      <div className="text-xs text-gray-500">
                        {reservasi.noTelepon}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {reservasi.paketNama}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {reservasi.jumlahJamaah} orang
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {new Date(reservasi.tanggalKeberangkatan).toLocaleDateString(
                        "id-ID",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </td>
                    <td className="px-4 py-3">{getStatusBadge(reservasi.status)}</td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        onClick={() => {
                          setSelectedReservasi(reservasi);
                          setShowDetail(true);
                        }}
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetail && selectedReservasi && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Detail Reservasi
                </h2>
                <button
                  onClick={() => setShowDetail(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Nama Lengkap
                </label>
                <p className="text-gray-900">{selectedReservasi.namaLengkap}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <p className="text-gray-900">{selectedReservasi.email}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    No. Telepon
                  </label>
                  <p className="text-gray-900">{selectedReservasi.noTelepon}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Alamat
                </label>
                <p className="text-gray-900">{selectedReservasi.alamat}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Paket
                  </label>
                  <p className="text-gray-900">{selectedReservasi.paketNama}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Jumlah Jamaah
                  </label>
                  <p className="text-gray-900">
                    {selectedReservasi.jumlahJamaah} orang
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Tanggal Keberangkatan
                </label>
                <p className="text-gray-900">
                  {new Date(
                    selectedReservasi.tanggalKeberangkatan
                  ).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              {selectedReservasi.catatan && (
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Catatan
                  </label>
                  <p className="text-gray-900">{selectedReservasi.catatan}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Update Status
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "pending",
                    "dikonfirmasi",
                    "diproses",
                    "selesai",
                    "dibatalkan",
                  ].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selectedReservasi.id, status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedReservasi.status === status
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between">
              <button
                onClick={() => deleteReservasi(selectedReservasi.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Hapus Reservasi
              </button>
              <button
                onClick={() => setShowDetail(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
