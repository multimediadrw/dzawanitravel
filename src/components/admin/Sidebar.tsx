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

const SavingsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M19 8H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
    <path d="M12 12v.01" />
    <path d="M3 8l2-4h14l2 4" />
    <circle cx="12" cy="14" r="1.5" />
  </svg>
);

const menuItems = [
  { name: 'Dashboard', href: '/admin', icon: DashboardIcon },
  { name: 'Paket Umroh', href: '/admin/paket-umroh', icon: PlaneIcon },
  { name: 'Reservasi', href: '/admin/reservasi', icon: FileTextIcon },
  { name: 'Tabungan Umroh', href: '/admin/tabungan-umroh', icon: SavingsIcon },
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
        <div className="mb-8">
          <div className="bg-white p-3 rounded-xl shadow-lg">
            <Image
              src="/logo.png"
              alt="Dzawani Travel"
              width={200}
              height={60}
              className="object-contain w-full h-auto"
            />
          </div>
          <p className="text-center text-xs text-purple-200 mt-2">Admin Panel</p>
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
