import type { Metadata } from "next";
import {  Tajawal, Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "الاتحاد الوطني لطلبة موريتانيا ",
  description: "Unem website",
};



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
      <body className={`${tajawal.className} ${roboto.className} bg-main`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
