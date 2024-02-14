import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { institutions } from "@/constats/options/institutions";

export default function Institutions() {
  return <>
        <HeaderImage picture={"/05.png"} />
        <PageOptions options={institutions} mainRoute="institutions"/>
      <FooterImage />
  </>;
}
