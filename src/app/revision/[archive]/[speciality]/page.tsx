import Iframe from "@/components/Iframe";
import NewsHeader from "@/components/news/header/NewsHeader";

interface SpecialityProps {
  params: {
    archive: string;
    speciality: string;
  };
}

// export async function generateStaticParams() {
//   return archives.map((archive) => ({
//     params: {
//       archive,
//     },
//   }));
// }

export default function Speciality({ params }: SpecialityProps) {
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
