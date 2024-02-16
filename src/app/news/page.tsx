import { Separator } from "@/components/ui/separator";
import { fetchPostes } from "@/app/action";
import Postes from "@/components/news/contents/Postes";
import LoadMore from "@/components/news/contents/LoadMore";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'الأخبار والمنشورات',
  description: "الاتحاد الوطني لطلبة موريتانيا - الأخبار والمنشورات",
};

export default async function NewsPostes() {
  const { postes, lastDocId } = await fetchPostes();

  return (
    <>
      <section className="flex items-center gap-x-4 pt-7 flex-col bg-white">
        <Postes postes={postes} />
        <LoadMore lastDocId={lastDocId} />
        <Separator />
      </section>
    </>
  );
}
