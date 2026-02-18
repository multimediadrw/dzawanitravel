'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  DashboardIcon, 
  PlaneIcon, 
  ImageIcon, 
  MessageIcon, 
  HelpCircleIcon, 
  FileTextIcon 
} from './Icons';

const menuItems = [
  { name: 'Dashboard', href: '/admin', icon: DashboardIcon },
  { name: 'Paket Umroh', href: '/admin/paket-umroh', icon: PlaneIcon },
  { name: 'Galeri', href: '/admin/galeri', icon: ImageIcon },
  { name: 'Testimoni Mitra', href: '/admin/testimoni', icon: MessageIcon },
  { name: 'FAQ Mitra', href: '/admin/faq', icon: HelpCircleIcon },
  { name: 'Konten Mitra', href: '/admin/konten-mitra', icon: FileTextIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-900 to-purple-700 text-white min-h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/logo.png"
            alt="Dzawani Travel"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-xl font-bold leading-tight">DZAWANI</h1>
            <p className="text-xs text-purple-200">Admin Panel</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
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
                    <Icon className="w-5 h-5" />
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
