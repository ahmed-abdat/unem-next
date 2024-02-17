import Iframe from "@/components/Iframe";
import NewsHeader from "@/components/news/header/NewsHeader";

export default function page({
  params,
}: {
  params: { archive: string; speciality: string };
}) {


  return (
   <>
   <NewsHeader />
   <Iframe
    title={`أرشيف ${params.archive}`}
      url={`https://drive.google.com/embeddedfolderview?id=${params.speciality}&resourcekey=RESOURCE-KEY`}
      isFull
    />
   </>
  );
}
