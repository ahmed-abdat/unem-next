import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { revisions } from "@/constats/options/revisions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مراجع و دروس",
  description: "الاتحاد الوطني لطلبة موريتانيا - مراجع و دروس",
};

export default function Revision() {
  return (
    <>
      <HeaderImage picture={"/03.png"} />
      <PageOptions options={revisions} mainRoute="revision" />
      <FooterImage />
    </>
  );
}
