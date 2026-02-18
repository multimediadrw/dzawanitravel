'use client';

import { useState } from 'react';

interface PaketUmroh {
  id: string;
  nama: string;
  harga: number;
  durasi: string;
  maskapai: string;
  hotel: string;
  deskripsi: string;
}

export default function PaketUmrohAdmin() {
  const [pakets, setPakets] = useState<PaketUmroh[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nama: '',
    harga: '',
    durasi: '',
    maskapai: '',
    hotel: '',
    deskripsi: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing
      setPakets(pakets.map(p => 
        p.id === editingId 
          ? { ...formData, id: editingId, harga: Number(formData.harga) }
          : p
      ));
      setEditingId(null);
    } else {
      // Add new
      const newPaket: PaketUmroh = {
        ...formData,
        id: Date.now().toString(),
        harga: Number(formData.harga),
      };
      setPakets([...pakets, newPaket]);
    }

    // Reset form
    setFormData({
      nama: '',
      harga: '',
      durasi: '',
      maskapai: '',
      hotel: '',
      deskripsi: '',
    });
    setIsFormOpen(false);
  };

  const handleEdit = (paket: PaketUmroh) => {
    setFormData({
      nama: paket.nama,
      harga: paket.harga.toString(),
      durasi: paket.durasi,
      maskapai: paket.maskapai,
      hotel: paket.hotel,
      deskripsi: paket.deskripsi,
    });
    setEditingId(paket.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus paket ini?')) {
      setPakets(pakets.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Paket Umroh</h1>
        <button
          onClick={() => {
            setIsFormOpen(true);
            setEditingId(null);
            setFormData({
              nama: '',
              harga: '',
              durasi: '',
              maskapai: '',
              hotel: '',
              deskripsi: '',
            });
          }}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium"
        >
          + Tambah Paket Baru
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingId ? 'Edit Paket Umroh' : 'Tambah Paket Umroh Baru'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Paket
                </label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: Paket Umroh 9 Hari"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  required
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="25000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durasi
                </label>
                <input
                  type="text"
                  required
                  value={formData.durasi}
                  onChange={(e) => setFormData({ ...formData, durasi: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="9 Hari 7 Malam"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maskapai
                </label>
                <input
                  type="text"
                  required
                  value={formData.maskapai}
                  onChange={(e) => setFormData({ ...formData, maskapai: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Garuda Indonesia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hotel
                </label>
                <input
                  type="text"
                  required
                  value={formData.hotel}
                  onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Bintang 5"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi
              </label>
              <textarea
                required
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Deskripsi lengkap paket umroh..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium"
              >
                {editingId ? 'Update Paket' : 'Simpan Paket'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setEditingId(null);
                }}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors font-medium"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nama Paket</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Harga</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durasi</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Maskapai</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pakets.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Belum ada paket umroh. Klik "Tambah Paket Baru" untuk menambahkan.
                </td>
              </tr>
            ) : (
              pakets.map((paket) => (
                <tr key={paket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{paket.nama}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Rp {paket.harga.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{paket.durasi}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{paket.maskapai}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(paket)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(paket.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
