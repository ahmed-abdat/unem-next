import FullImages from "@/components/FullImage";

export default function Institu({ params} : {params : {institu : string}}) {
  return <FullImages src={`/fac2/${params.institu}.jpg`} />;
}
