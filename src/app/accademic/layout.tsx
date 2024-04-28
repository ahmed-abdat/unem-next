import NewsHeader from "@/components/news/header/NewsHeader";
import NewsFooter from "@/components/news/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'الشؤون الأكاديمية',
    description: "الاتحاد الوطني لطلبة موريتانيا - الشؤون الأكاديمية",
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NewsHeader />
      {children}
      <NewsFooter />
    </>
  );
}
