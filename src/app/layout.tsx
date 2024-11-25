import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ChevronRight } from "lucide-react";
import Link from 'next/link'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KiesKubus",
  description: "De KiesKubus - Omdat jouw stem niet in een hokje past\nTest jouw politieke voorkeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="h-12 bg-white text-black font-sans">
          <ul className="w-full h-full flex content-center px-4 gap-4">
            <li className="h-full flex items-center"><Link href="/">KiesKubus</Link></li>
            <li className="h-full flex items-center ml-auto">Doel</li>
            <li className="h-full flex items-center">Over ons</li>
          </ul>
        </header>
        <div id="subheader" className="h-8 bg-blue-600 text-white font-sans">
          <ul className="w-full h-full flex content-center px-4 gap-4">
            <li className="h-full flex items-center ml-auto">
              Word campagnekoning! <ChevronRight />
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}