import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { resulta } from "@/constats/options/resulta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "النتائج",
  description: "الاتحاد الوطني لطلبة موريتانيا - النتائج",
};

export default function Resulta() {
    return (
        <>
        <HeaderImage picture={'/02.png'} />
            <PageOptions options={resulta} isLink/>
          <FooterImage />
        </>
      );
}
