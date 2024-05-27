import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { tajawal, Aljazira } from "@/app/font/font";
import { Toaster } from "sonner";
import "./globals.css";
import { CSPostHogProvider } from "@/app/PostHugProvider";

export const revalidate = 120;

export const metadata: Metadata = {
  metadataBase: new URL("https://unem2000.com"),
  manifest: "/manifest.json",
  title: {
    default: "الاتحاد الوطني لطلبة موريتانيا",
    template: "%s | الاتحاد الوطني",
  },
  description: "الاتحاد الوطني لطلبة موريتانيا - الأخبار والمنشورات",
};

export const viewport: Viewport = {
  themeColor: "#58cc02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <CSPostHogProvider>
        <body className={`${Aljazira.className}  ${tajawal.className} bg-main`}>
          {children}
          <Toaster position="top-center" richColors />
          <SpeedInsights />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
