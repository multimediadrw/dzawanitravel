'use client';

import { useState } from 'react';
import { PlusIcon, EditIcon, TrashIcon } from '@/components/admin/Icons';

interface FAQ {
  id: string;
  pertanyaan: string;
  jawaban: string;
  kategori: string;
  urutan: number;
}

export default function FAQAdmin() {
  const [items, setItems] = useState<FAQ[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    pertanyaan: '',
    jawaban: '',
    kategori: 'Umum',
    urutan: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setItems(items.map(item => 
        item.id === editingId 
          ? { ...formData, id: editingId, urutan: Number(formData.urutan) }
          : item
      ));
      setEditingId(null);
    } else {
      const newItem: FAQ = {
        ...formData,
        id: Date.now().toString(),
        urutan: Number(formData.urutan),
      };
      setItems([...items, newItem].sort((a, b) => a.urutan - b.urutan));
    }

    setFormData({ pertanyaan: '', jawaban: '', kategori: 'Umum', urutan: '1' });
    setIsFormOpen(false);
  };

  const handleEdit = (item: FAQ) => {
    setFormData({
      pertanyaan: item.pertanyaan,
      jawaban: item.jawaban,
      kategori: item.kategori,
      urutan: item.urutan.toString(),
    });
    setEditingId(item.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus FAQ ini?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola FAQ Mitra</h1>
          <p className="text-sm text-gray-600 mt-1">Total {items.length} pertanyaan</p>
        </div>
        <button
          onClick={() => {
            setIsFormOpen(true);
            setEditingId(null);
            setFormData({ pertanyaan: '', jawaban: '', kategori: 'Umum', urutan: '1' });
          }}
          className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors font-medium"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Tambah FAQ</span>
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingId ? 'Edit FAQ' : 'Tambah FAQ Baru'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="Umum">Umum</option>
                  <option value="Pendaftaran">Pendaftaran</option>
                  <option value="Pembayaran">Pembayaran</option>
                  <option value="Keberangkatan">Keberangkatan</option>
                  <option value="Layanan">Layanan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urutan
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.urutan}
                  onChange={(e) => setFormData({ ...formData, urutan: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pertanyaan
              </label>
              <input
                type="text"
                required
                value={formData.pertanyaan}
                onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Apa itu program mitra Dzawani Travel?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jawaban
              </label>
              <textarea
                required
                value={formData.jawaban}
                onChange={(e) => setFormData({ ...formData, jawaban: e.target.value })}
                rows={4}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tulis jawaban lengkap..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm"
              >
                {editingId ? 'Update FAQ' : 'Simpan FAQ'}
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider w-16">No.</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Kategori</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Pertanyaan</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Jawaban</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500 text-sm">
                    Belum ada FAQ. Klik "Tambah FAQ" untuk menambahkan.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium text-center">{item.urutan}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-lg bg-purple-100 text-purple-800">
                        {item.kategori}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium max-w-xs">
                      {item.pertanyaan}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 max-w-md">
                      <p className="line-clamp-2">{item.jawaban}</p>
                    </td>
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
