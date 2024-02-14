import Iframe from "@/components/Iframe";
import { archives } from "@/constats/archives";

export default function page({
  params,
}: {
  params: { archive: string; speciality: string };
}) {


  return (
    <Iframe
    title={`أرشيف ${params.archive}`}
      url={`https://drive.google.com/embeddedfolderview?id=${params.speciality}&resourcekey=RESOURCE-KEY`}
      isFull
    />
  );
}
