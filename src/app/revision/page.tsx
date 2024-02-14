import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { revisions } from "@/constats/options/revisions";

export default function Revision() {
    return (
        <>
          <HeaderImage picture={"/03.png"} />
            <PageOptions options={revisions} mainRoute="revision"/>
          <FooterImage />
        </>
      );
}
