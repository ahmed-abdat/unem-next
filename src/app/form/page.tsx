import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import Iframe from "@/components/Iframe";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "الإستمارة والتوجيه",
  description: "الإستمارة والتوجيه",
};

export default function Form() {
  return (
    <>
      <HeaderImage picture={"/fac/13.png"} />
      <Iframe title="الإستمارة والتوجيه" url="https://www.tewjih.com/rescnb-2022XCdkjfioog562.php" />
      <FooterImage />
    </>
  );
}
