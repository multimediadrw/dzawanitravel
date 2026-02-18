import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dzawani Travel Indonesia - Biro Perjalanan Umroh Terpercaya",
  description:
    "Dzawani Travel Indonesia adalah biro perjalanan umroh terpercaya sejak 2020. Melayani paket umroh reguler, plus, dan VIP dengan pelayanan terbaik ke Tanah Suci.",
  keywords: [
    "umroh",
    "travel umroh",
    "paket umroh",
    "biro umroh",
    "dzawani travel",
    "umroh murah",
    "umroh 2026",
    "travel umroh terpercaya",
  ],
  openGraph: {
    title: "Dzawani Travel Indonesia - Biro Perjalanan Umroh Terpercaya",
    description:
      "Wujudkan impian ibadah umroh Anda bersama Dzawani Travel Indonesia. Pelayanan terbaik, harga amanah.",
    type: "website",
    locale: "id_ID",
    siteName: "Dzawani Travel Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
