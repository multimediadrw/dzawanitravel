'use client';

import { useState } from 'react';
import { PlusIcon, EditIcon, TrashIcon, StarIcon } from '@/components/admin/Icons';

interface Testimoni {
  id: string;
  nama: string;
  kota: string;
  rating: number;
  testimoni: string;
  tanggal: string;
}

export default function TestimoniAdmin() {
  const [items, setItems] = useState<Testimoni[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nama: '',
    kota: '',
    rating: '5',
    testimoni: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setItems(items.map(item => 
        item.id === editingId 
          ? { ...formData, id: editingId, rating: Number(formData.rating), tanggal: item.tanggal }
          : item
      ));
      setEditingId(null);
    } else {
      const newItem: Testimoni = {
        ...formData,
        id: Date.now().toString(),
        rating: Number(formData.rating),
        tanggal: new Date().toISOString().split('T')[0],
      };
      setItems([newItem, ...items]);
    }

    setFormData({ nama: '', kota: '', rating: '5', testimoni: '' });
    setIsFormOpen(false);
  };

  const handleEdit = (item: Testimoni) => {
    setFormData({
      nama: item.nama,
      kota: item.kota,
      rating: item.rating.toString(),
      testimoni: item.testimoni,
    });
    setEditingId(item.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus testimoni ini?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Testimoni Mitra</h1>
          <p className="text-sm text-gray-600 mt-1">Total {items.length} testimoni</p>
        </div>
        <button
          onClick={() => {
            setIsFormOpen(true);
            setEditingId(null);
            setFormData({ nama: '', kota: '', rating: '5', testimoni: '' });
          }}
          className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors font-medium"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Tambah Testimoni</span>
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingId ? 'Edit Testimoni' : 'Tambah Testimoni Baru'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Mitra
                </label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kota
                </label>
                <input
                  type="text"
                  required
                  value={formData.kota}
                  onChange={(e) => setFormData({ ...formData, kota: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Kota asal"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="5">5 Bintang - Sangat Puas</option>
                <option value="4">4 Bintang - Puas</option>
                <option value="3">3 Bintang - Cukup</option>
                <option value="2">2 Bintang - Kurang</option>
                <option value="1">1 Bintang - Sangat Kurang</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimoni
              </label>
              <textarea
                required
                value={formData.testimoni}
                onChange={(e) => setFormData({ ...formData, testimoni: e.target.value })}
                rows={4}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tulis testimoni..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm"
              >
                {editingId ? 'Update Testimoni' : 'Simpan Testimoni'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(false);
                  setEditingId(null);
                }}
                className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl hover:bg-gray-300 transition-colors font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Nama</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kota</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Rating</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Testimoni</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Tanggal</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500 text-sm">
                    Belum ada testimoni. Klik "Tambah Testimoni" untuk menambahkan.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">{item.nama}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.kota}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-gray-900 font-medium">{item.rating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 max-w-md">
                      <p className="line-clamp-2">{item.testimoni}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.tanggal}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleEdit(item)}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                          title="Edit"
                        >
                          <EditIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 font-medium"
                          title="Hapus"
                        >
                          <TrashIcon className="w-4 h-4" />
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
    </div>
  );
}
