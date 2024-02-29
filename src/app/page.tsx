import { Separator } from "@/components/ui/separator";
import { fetchPostes } from "@/app/action";
import Postes from "@/components/news/contents/Postes";
import LoadMore from "@/components/news/contents/LoadMore";
import { Metadata } from "next";
import NewsHeader from "@/components/news/header/NewsHeader";
import NewsFooter from "@/components/news/Footer";
import {Aljazira} from '@/app/font/font'

export const metadata: Metadata = {
  title: "الأخبار والمنشورات",
  description: "الاتحاد الوطني لطلبة موريتانيا - الأخبار والمنشورات",
};




export default async function NewsPostes() {
  const { postes, lastDocId } = await fetchPostes();

  return (
    <>
    <NewsHeader />
      <section className={`${Aljazira.className} flex items-center gap-x-4 pt-0 flex-col bg-white sm:pt-5 md:pt-6`}>
        <Postes postes={postes} />
        <LoadMore lastDocId={lastDocId} />
        <Separator />
      </section>
      <NewsFooter />
    </>
  );
}
