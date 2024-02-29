import { Separator } from "@/components/ui/separator";
import { fetchPostes } from "@/app/action";
import Postes from "@/components/news/contents/Postes";
import LoadMore from "@/components/news/contents/LoadMore";
import { Metadata } from "next";
import NewsHeader from "@/components/news/header/NewsHeader";
import NewsFooter from "@/components/news/Footer";
import { Aljazira } from "@/app/font/font";

export const metadata: Metadata = {
  title: "فضاء الطالب",
  description: "الاتحاد الوطني لطلبة موريتانيا -  فضاء الطالب",
};

export default async function NewsPostes() {
  const { postes, lastDocId } = await fetchPostes("student-space");

  return (
    <section
      className={`${Aljazira.className} flex items-center gap-x-4 pt-0 flex-col bg-white sm:pt-3 md:pt-4`}
    >
      <Postes postes={postes} />
      <LoadMore lastDocId={lastDocId} isStudent />
      <Separator />
    </section>
  );
}
