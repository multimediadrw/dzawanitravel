'use client';

import { useState } from 'react';
import { FileTextIcon, CheckCircleIcon } from '@/components/admin/Icons';

interface KontenMitra {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  benefit1Title: string;
  benefit1Desc: string;
  benefit2Title: string;
  benefit2Desc: string;
  benefit3Title: string;
  benefit3Desc: string;
  benefit4Title: string;
  benefit4Desc: string;
  ctaTitle: string;
  ctaDescription: string;
}

export default function KontenMitraAdmin() {
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState<KontenMitra>({
    heroTitle: 'Bergabunglah Sebagai Mitra Dzawani Travel',
    heroSubtitle: 'Raih Penghasilan Tambahan dengan Menjadi Mitra Resmi',
    heroDescription: 'Dapatkan komisi menarik dan berbagai keuntungan dengan bergabung sebagai mitra Dzawani Travel. Bantu lebih banyak orang mewujudkan impian umroh mereka.',
    benefit1Title: 'Komisi Menarik',
    benefit1Desc: 'Dapatkan komisi kompetitif untuk setiap jamaah yang Anda daftarkan',
    benefit2Title: 'Pelatihan Gratis',
    benefit2Desc: 'Akses pelatihan dan materi marketing untuk mendukung kesuksesan Anda',
    benefit3Title: 'Support Penuh',
    benefit3Desc: 'Tim kami siap membantu Anda 24/7 dalam menjalankan kemitraan',
    benefit4Title: 'Sistem Mudah',
    benefit4Desc: 'Platform digital yang memudahkan Anda mengelola jamaah dan komisi',
    ctaTitle: 'Siap Menjadi Mitra Kami?',
    ctaDescription: 'Daftar sekarang dan mulai raih penghasilan tambahan dengan menjadi bagian dari keluarga besar Dzawani Travel',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate save
    console.log('Saving konten mitra:', formData);
    setIsSaved(true);
    
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  const handleChange = (field: keyof KontenMitra, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Konten Halaman Mitra</h1>
        <p className="text-sm text-gray-600 mt-1">Edit konten yang ditampilkan di halaman mitra</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileTextIcon className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Hero Section</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Utama
              </label>
              <input
                type="text"
                required
                value={formData.heroTitle}
                onChange={(e) => handleChange('heroTitle', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sub Judul
              </label>
              <input
                type="text"
                required
                value={formData.heroSubtitle}
                onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi
              </label>
              <textarea
                required
                value={formData.heroDescription}
                onChange={(e) => handleChange('heroDescription', e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileTextIcon className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Keuntungan Menjadi Mitra</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Keuntungan 1</h3>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Judul</label>
                <input
                  type="text"
                  required
                  value={formData.benefit1Title}
                  onChange={(e) => handleChange('benefit1Title', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea
                  required
                  value={formData.benefit1Desc}
                  onChange={(e) => handleChange('benefit1Desc', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Keuntungan 2</h3>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Judul</label>
                <input
                  type="text"
                  required
                  value={formData.benefit2Title}
                  onChange={(e) => handleChange('benefit2Title', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea
                  required
                  value={formData.benefit2Desc}
                  onChange={(e) => handleChange('benefit2Desc', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Keuntungan 3</h3>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Judul</label>
                <input
                  type="text"
                  required
                  value={formData.benefit3Title}
                  onChange={(e) => handleChange('benefit3Title', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea
                  required
                  value={formData.benefit3Desc}
                  onChange={(e) => handleChange('benefit3Desc', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Keuntungan 4</h3>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Judul</label>
                <input
                  type="text"
                  required
                  value={formData.benefit4Title}
                  onChange={(e) => handleChange('benefit4Title', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea
                  required
                  value={formData.benefit4Desc}
                  onChange={(e) => handleChange('benefit4Desc', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileTextIcon className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">Call to Action</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul CTA
              </label>
              <input
                type="text"
                required
                value={formData.ctaTitle}
                onChange={(e) => handleChange('ctaTitle', e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi CTA
              </label>
              <textarea
                required
                value={formData.ctaDescription}
                onChange={(e) => handleChange('ctaDescription', e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium"
          >
            {isSaved ? (
              <>
                <CheckCircleIcon className="w-5 h-5" />
                <span>Tersimpan!</span>
              </>
            ) : (
              <span>Simpan Perubahan</span>
            )}
          </button>
          {isSaved && (
            <span className="text-sm text-green-600 font-medium">
              Konten berhasil diperbarui
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
