import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import {RB , tajawal , AljaziraBold ,AljaziraRegular} from '@/app/font/font'
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase : new URL('https://unem2000.com'),
  manifest: '/manifest.json',
  title: {
    default : 'الاتحاد الوطني لطلبة موريتانيا',
    template : '%s | الاتحاد الوطني',
  },
  description: "الاتحاد الوطني لطلبة موريتانيا - الأخبار والمنشورات",
};

export const viewport : Viewport = {
themeColor : '#58cc02',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${RB.className} ${AljaziraBold.className} ${AljaziraRegular.className}  ${tajawal.className} bg-main`}>
      {children}
        <Toaster position="top-center" richColors />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
