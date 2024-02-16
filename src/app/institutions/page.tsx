import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { institutions } from "@/constats/options/institutions";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "الكليات",
  description: "الكليات",
};

export default function Institutions() {
  return <>
        <HeaderImage picture={"/05.png"} />
        <PageOptions options={institutions} mainRoute="institutions"/>
      <FooterImage />
  </>;
}
