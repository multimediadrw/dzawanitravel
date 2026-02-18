'use client';

import { useState, useEffect } from 'react';
import { UploadIcon, TrashIcon } from '@/components/admin/Icons';

interface GaleriItem {
  id: string;
  url: string;
  caption: string;
  createdAt: string;
}

export default function GaleriAdmin() {
  const [items, setItems] = useState<GaleriItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    url: '',
    caption: '',
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/galeri');
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching galeri:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/galeri', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const newItem = await res.json();
      setItems([newItem, ...items]);
      
      setFormData({ url: '', caption: '' });
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error saving galeri:', error);
      alert('Gagal menyimpan data. Silakan coba lagi.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus foto ini?')) return;
    
    try {
      await fetch(`/api/galeri/${id}`, { method: 'DELETE' });
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting galeri:', error);
      alert('Gagal menghapus data. Silakan coba lagi.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Memuat data...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Galeri Foto</h1>
          <p className="text-sm text-gray-600 mt-1">Total: {items.length} foto</p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors font-medium"
        >
          <UploadIcon className="w-5 h-5" />
          <span>Upload Foto</span>
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Foto Baru</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Foto
              </label>
              <input
                type="url"
                required
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Caption
              </label>
              <input
                type="text"
                required
                value={formData.caption}
                onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Deskripsi foto..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm"
              >
                Simpan Foto
              </button>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl hover:bg-gray-300 transition-colors font-medium text-sm"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.length === 0 ? (
          <div className="col-span-full bg-white rounded-2xl shadow-md p-8 text-center text-gray-500">
            Belum ada foto di galeri. Klik "Upload Foto" untuk menambahkan.
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-900 font-medium line-clamp-2 mb-2">
                  {item.caption}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  {new Date(item.createdAt).toLocaleDateString('id-ID')}
                </p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                >
                  <TrashIcon className="w-4 h-4" />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
