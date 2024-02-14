import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
// import { tajawal} from "@/app/layout";

export default function Schedule({ params } : {params: {schedule: string}}) {
  return <>
  <HeaderImage picture="/06.png" />
  <section className="min-h-[68dvh] md:min-w-[55dvh] flex items-center justify-center px-2 text-center text-whtssap-label" >
    <h2 className={` font-rb text-[1.6rem] font-semibold`}>سيتم نشر جداول الحصص موازاة مع إنطلاق العام الدراسي </h2>
   </section>
  <FooterImage />
  </>;
}
