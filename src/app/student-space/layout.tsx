import NewsHeader from "@/components/news/header/NewsHeader";
import NewsFooter from "@/components/news/Footer";


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
