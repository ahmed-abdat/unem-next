import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
import PageOptions from "@/components/PageOptions";
import { schedules } from "@/constats/options/scheduels";


export default function page() {
    return (
        <>
          <HeaderImage picture={"/06.png"} />
            <PageOptions options={schedules}  mainRoute="schedules"/>
          <FooterImage />
        </>
      );
}
