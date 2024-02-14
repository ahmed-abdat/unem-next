import HeaderImage from "@/components/HeaderImage";
import PageOptions from "@/components/PageOptions";
import { branches } from "@/constats/options/branches";
import FooterImage from "@/components/FooterImage";

export default function Branches() {
  return <>
  <HeaderImage picture="/07.png"/>
  <PageOptions options={branches} isLink />
  <FooterImage />
  </>;
}
