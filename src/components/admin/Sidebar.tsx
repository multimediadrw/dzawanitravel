'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Paket Umroh', href: '/admin/paket-umroh', icon: '✈️' },
  { name: 'Galeri', href: '/admin/galeri', icon: '🖼️' },
  { name: 'Testimoni Mitra', href: '/admin/testimoni', icon: '💬' },
  { name: 'FAQ Mitra', href: '/admin/faq', icon: '❓' },
  { name: 'Konten Mitra', href: '/admin/konten-mitra', icon: '📝' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-900 to-purple-700 text-white min-h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Dzawani Admin</h1>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-white text-purple-900 font-semibold'
                        : 'hover:bg-purple-800'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
