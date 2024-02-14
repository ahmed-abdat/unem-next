import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { remote } from "@/constats/options/remote";

export default function Revision() {
  return (
    <>
      <HeaderImage picture={"/fac/12.png"} />
      <PageOptions options={remote} mainRoute="remote"  />
      <FooterImage />
    </>
  );
}
