"use client";

import { useState, useEffect } from "react";

export default function ReservasiPage() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    no_telepon: "",
    alamat: "",
    paket_id: "",
    jumlah_jamaah: 1,
    tanggal_keberangkatan: "",
    catatan: "",
  });

  const [paketList, setPaketList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch paket umroh list
    fetch("/api/paket-umroh")
      .then((res) => res.json())
      .then((data) => setPaketList(data))
      .catch((err) => console.error("Error fetching paket:", err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/reservasi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim reservasi");
      }

      setSuccess(true);
      setFormData({
        nama_lengkap: "",
        email: "",
        no_telepon: "",
        alamat: "",
        paket_id: "",
        jumlah_jamaah: 1,
        tanggal_keberangkatan: "",
        catatan: "",
      });

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const selectedPaket = paketList.find((p) => p.id === formData.paket_id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reservasi Paket Umroh
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Isi formulir di bawah ini untuk melakukan reservasi paket umroh.
            Tim kami akan menghubungi Anda dalam 1x24 jam.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0"
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
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-1">
                  Reservasi Berhasil Dikirim!
                </h3>
                <p className="text-green-700">
                  Terima kasih telah melakukan reservasi. Tim kami akan segera
                  menghubungi Anda untuk konfirmasi lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-1">
                  Terjadi Kesalahan
                </h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Data Pribadi */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">
                Data Pribadi
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nama_lengkap"
                    value={formData.nama_lengkap}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="Masukkan nama lengkap sesuai KTP"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="contoh@email.com"
                  />
                </div>

                {/* No Telepon */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    No. Telepon/WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="no_telepon"
                    value={formData.no_telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                {/* Alamat */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>
              </div>
            </div>

            {/* Data Reservasi */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">
                Data Reservasi
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pilih Paket */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pilih Paket Umroh <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="paket_id"
                    value={formData.paket_id}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  >
                    <option value="">-- Pilih Paket --</option>
                    {paketList.map((paket) => (
                      <option key={paket.id} value={paket.id}>
                        {paket.nama} - Rp{" "}
                        {paket.harga.toLocaleString("id-ID")} ({paket.durasi}{" "}
                        Hari)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Detail Paket (if selected) */}
                {selectedPaket && (
                  <div className="md:col-span-2 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Detail Paket:
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Nama Paket:</span>
                        <p className="font-semibold text-gray-900">
                          {selectedPaket.nama}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Harga:</span>
                        <p className="font-semibold text-purple-600">
                          Rp {selectedPaket.harga.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Durasi:</span>
                        <p className="font-semibold text-gray-900">
                          {selectedPaket.durasi} Hari
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Jumlah Jamaah */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Jumlah Jamaah <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="jumlah_jamaah"
                    value={formData.jumlah_jamaah}
                    onChange={handleChange}
                    required
                    min="1"
                    max="50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Jumlah orang yang akan berangkat
                  </p>
                </div>

                {/* Tanggal Keberangkatan */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tanggal Keberangkatan (Perkiraan){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="tanggal_keberangkatan"
                    value={formData.tanggal_keberangkatan}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Tanggal dapat berubah sesuai ketersediaan
                  </p>
                </div>

                {/* Catatan */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    name="catatan"
                    value={formData.catatan}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                    placeholder="Tulis pertanyaan atau permintaan khusus Anda di sini..."
                  />
                </div>

                {/* Total Estimasi */}
                {selectedPaket && formData.jumlah_jamaah > 0 && (
                  <div className="md:col-span-2 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm opacity-90 mb-1">
                          Estimasi Total Biaya:
                        </p>
                        <p className="text-3xl font-bold">
                          Rp{" "}
                          {(
                            selectedPaket.harga * formData.jumlah_jamaah
                          ).toLocaleString("id-ID")}
                        </p>
                        <p className="text-xs opacity-75 mt-1">
                          {formData.jumlah_jamaah} jamaah x Rp{" "}
                          {selectedPaket.harga.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <svg
                        className="w-16 h-16 opacity-20"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim Reservasi...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-6 h-6 mr-2"
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
                    Kirim Reservasi
                  </span>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Dengan mengirim formulir ini, Anda menyetujui{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Syarat & Ketentuan
                </a>{" "}
                kami
              </p>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Respon Cepat</h3>
            <p className="text-sm text-gray-600">
              Tim kami akan menghubungi Anda dalam 1x24 jam
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Data Aman</h3>
            <p className="text-sm text-gray-600">
              Data pribadi Anda dijamin keamanannya
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Konsultasi Gratis
            </h3>
            <p className="text-sm text-gray-600">
              Konsultasi gratis sebelum reservasi final
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
