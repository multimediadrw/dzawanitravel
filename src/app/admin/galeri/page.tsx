'use client';

import { useState } from 'react';
import { PlusIcon, TrashIcon, UploadIcon } from '@/components/admin/Icons';
import Image from 'next/image';

interface GaleriItem {
  id: string;
  url: string;
  caption: string;
  createdAt: string;
}

export default function GaleriAdmin() {
  const [items, setItems] = useState<GaleriItem[]>([
    { id: '1', url: '/gallery/1.jpg', caption: 'Keberangkatan Umroh Dzawani Travel', createdAt: '2024-01-15' },
    { id: '2', url: '/gallery/2.jpg', caption: 'Jamaah di Masjidil Haram', createdAt: '2024-01-16' },
    { id: '3', url: '/gallery/3.jpg', caption: 'Kunjungan ke Masjid Nabawi', createdAt: '2024-01-17' },
    { id: '4', url: '/gallery/4.jpg', caption: 'Manasik Haji bersama Dzawani Travel', createdAt: '2024-01-18' },
    { id: '5', url: '/gallery/5.jpg', caption: 'Persiapan keberangkatan jamaah', createdAt: '2024-01-19' },
    { id: '6', url: '/gallery/6.jpg', caption: 'Jamaah di depan Kabah', createdAt: '2024-01-20' },
    { id: '7', url: '/gallery/7.jpg', caption: 'Ziarah ke Jabal Rahmah', createdAt: '2024-01-21' },
    { id: '8', url: '/gallery/8.jpg', caption: 'Kepulangan jamaah dengan penuh kebahagiaan', createdAt: '2024-01-22' },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    url: '',
    caption: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: GaleriItem = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setItems([newItem, ...items]);

    // Reset form
    setFormData({
      url: '',
      caption: '',
    });
    setIsFormOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus foto ini?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Galeri</h1>
          <p className="text-sm text-gray-600 mt-1">Total {items.length} foto</p>
        </div>
        <button
          onClick={() => {
            setIsFormOpen(true);
            setFormData({ url: '', caption: '' });
          }}
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
                type="text"
                required
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="/gallery/foto.jpg atau https://..."
              />
              <p className="text-xs text-gray-500 mt-1">Upload foto ke folder /public/gallery terlebih dahulu</p>
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
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden group">
            <div className="relative aspect-square">
              <Image
                src={item.url}
                alt={item.caption}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-900 font-medium mb-1 line-clamp-2">{item.caption}</p>
              <p className="text-xs text-gray-500 mb-3">{item.createdAt}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium text-sm"
              >
                <TrashIcon className="w-4 h-4" />
                <span>Hapus</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
