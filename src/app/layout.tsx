import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import localFont from "next/font/local";
import {  Tajawal, Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    default : "الاتحاد الوطني",
    template : '%s - الاتحاد الوطني',
  },
  description: "Unem website",
};

export const viewport : Viewport = {
themeColor : '#58cc02',
}

const RB = localFont({
  src: "./fonts/RB-Regular.ttf",
  variable: "--font-rb",
  // preload: true,
  fallback : ['sans-serif','system-ui', 'arial']
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  fallback : ['system-ui', 'arial']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${RB.className} ${tajawal.className} ${roboto.className} bg-main`}>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
