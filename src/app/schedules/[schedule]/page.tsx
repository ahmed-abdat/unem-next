import HeaderImage from "@/components/HeaderImage";
import FooterImage from "@/components/FooterImage";
// import { tajawal} from "@/app/layout";
export async function generateMetadata() {
  return {
    title: `الاتحاد الوطني - جداول الحصص`,
    description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - جداول الحصص }`,
    metadataBase : new URL('https://unem2000.com'),
    app : {
      name: 'unem2000',
      url: 'https://unem2000.com',
    },
    openGraph: {
      title: `unem - جداول الحصص`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - جداول الحصص}`,
      siteName: 'unem2000',
      type: 'website',
      locale: 'ar_MA',
    },
  };
}


export async function generateStaticParams() {
  return [];
}

export default function Schedule() {
  return <>
  <HeaderImage picture="/06.png" />
  <section className="min-h-[68dvh] md:min-w-[55dvh] flex items-center justify-center px-2 text-center text-whtssap-label" >
    <h2 className={` font-rb text-[1.6rem] font-semibold`}>سيتم نشر جداول الحصص موازاة مع إنطلاق العام الدراسي </h2>
   </section>
  <FooterImage />
  </>;
}
