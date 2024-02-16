import HeaderImage from "@/components/HeaderImage";
import PageOptions from "@/components/PageOptions";
import { branches } from "@/constats/options/branches";
import FooterImage from "@/components/FooterImage";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: " الفروع",
  description: " الفروع",
};

export default function Branches() {
  return <>
  <HeaderImage picture="/07.png"/>
  <PageOptions options={branches} isLink />
  <FooterImage />
  </>;
}
