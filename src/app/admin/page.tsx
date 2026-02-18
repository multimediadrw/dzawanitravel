import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import { PlaneIcon, ImageIcon, MessageIcon, HelpCircleIcon, PlusIcon } from '@/components/admin/Icons';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  const stats = [
    { name: 'Paket Umroh', count: 0, href: '/admin/paket-umroh', icon: PlaneIcon, color: 'bg-blue-500' },
    { name: 'Galeri Foto', count: 8, href: '/admin/galeri', icon: ImageIcon, color: 'bg-green-500' },
    { name: 'Testimoni', count: 0, href: '/admin/testimoni', icon: MessageIcon, color: 'bg-yellow-500' },
    { name: 'FAQ', count: 0, href: '/admin/faq', icon: HelpCircleIcon, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Admin</h1>
        <p className="text-gray-600">Selamat datang, {session?.user?.name || session?.user?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              href={stat.href}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} text-white p-3 rounded-xl`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-bold text-gray-900">{stat.count}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.name}</h3>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/paket-umroh"
              className="flex items-center gap-2 px-4 py-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors font-medium"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Tambah Paket Umroh Baru</span>
            </Link>
            <Link
              href="/admin/galeri"
              className="flex items-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition-colors font-medium"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Upload Foto Galeri</span>
            </Link>
            <Link
              href="/admin/testimoni"
              className="flex items-center gap-2 px-4 py-3 bg-yellow-100 text-yellow-700 rounded-xl hover:bg-yellow-200 transition-colors font-medium"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Tambah Testimoni Mitra</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Website Info</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Website URL</span>
              <a
                href="https://dzawanitravel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline text-sm"
              >
                dzawanitravel.vercel.app
              </a>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">WhatsApp</span>
              <span className="text-gray-900 font-medium">+62 811-2222-254</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Admin Email</span>
              <span className="text-gray-900 font-medium text-sm">{session?.user?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
