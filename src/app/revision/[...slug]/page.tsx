import HeaderImage from "@/components/HeaderImage";
import PageOptions from "@/components/PageOptions";
import FooterImage from "@/components/FooterImage";
import {  archives } from "@/constats/archives";
import NewsHeader from "@/components/news/header/NewsHeader";
import Iframe from "@/components/Iframe";

export async function generateMetadata({ params } : { params: { slug: string[] } } ) {
  return {
    title: `الاتحاد الوطني - ${params.slug[0]}`,
    description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${params.slug[0]} - ${params.slug[1]}`,
    metadataBase : new URL('https://unem2000.com'),
    app : {
      name: 'unem',
      url: 'https://unem2000.com',
    },
    openGraph: {
      title: `unem - ${params.slug[0]}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${params.slug[0]} - ${params.slug[1]}`,
      siteName: 'unem',
      type: 'website',
      locale: 'ar_MA',
    },
  };
}


export async function generateStaticParams() {
  const params : { slug: string[] }[] = [];

  archives.forEach(archive => {
    archive.filieres.forEach(filiere => {
      params.push({ slug: [archive.faculiter, filiere.url] });
    });
  });

  return params;
}

export default function Slugs({ params } : { params: { slug: string[] } }) {
  

    if(params.slug.length === 1) {
        const faculiter = archives?.find(
            (archive) => archive.faculiter === params.slug[0]
          );
          const fac = faculiter?.faculiter;
          const filiers = faculiter?.filieres;
          return (
            <>
              <HeaderImage picture={"/03.png"} />
              <PageOptions
                options={filiers }
                mainRoute={"revision"}
                subRoute={fac}
              />
              <FooterImage />
            </>
          );
        
    }
    if(params.slug.length === 2) {
        return (
            <>
              <NewsHeader />
              <Iframe
                title={`أرشيف ${params.slug[0]}`}
                url={`https://drive.google.com/embeddedfolderview?id=${params.slug[1]}&resourcekey=RESOURCE-KEY`}
                isFull
              />
            </>
          );
    }
    
  return <div>page not found</div>;
}
