import FullImages from "@/components/FullImage";

export async function generateMetadata({ params} : {params : {institu : string}}) {
  return {
    title: `الاتحاد الوطني - ${params.institu}`,
    description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${params.institu}`,
    metadataBase : new URL('https://uneme.vercel.app'),
    app : {
      name: 'unem',
      url: 'https://uneme.vercel.app',
    },
    openGraph: {
      title: `unem - ${params.institu}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${params.institu}`,
      url : `https://uneme.vercel.app/institutions/${params.institu}`,
      siteName: 'unem',
      type: 'website',
      locale: 'ar_MA',

      Images : [
        {
          url: `/fac2/${params.institu}.jpg`,
          contentType: 'image/jpeg',
          width: 1260,
          height: 800,
          alt: `unem - ${params.institu}`,
        }
      ]
    },
  };
}

export default function Institu({ params} : {params : {institu : string}}) {
  return <FullImages src={`/fac2/${params.institu}.jpg`} />;
}
