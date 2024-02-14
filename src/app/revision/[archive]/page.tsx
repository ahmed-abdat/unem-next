import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import { archives } from "@/constats/archives";
import PageOptions from "@/components/PageOptions";
import { optionType } from "@/types/options-type";

export default function Archives({ params }: { params: { archive: string } }) {
  const faculiter = archives.filter(
    (archive) => archive.faculiter === params.archive
  );
  const fac = faculiter[0].faculiter;
  const filiers = faculiter[0].filieres;
  console.log(faculiter[0].faculiter);

  const archivesOption = filiers as optionType[];

  return (
    <>
      <HeaderImage picture={"/03.png"} />
      <PageOptions
        options={archivesOption}
        mainRoute={"revision"}
        subRoute={fac}
      />
      <FooterImage />
    </>
  );
}
