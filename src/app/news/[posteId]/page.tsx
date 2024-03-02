import Postes from "@/components/news/poste/Poste";
import {getPoste , getAllPostes} from '@/app/action'




interface PosteProps {
  params: {
    posteId: string;
  };
}

export async function generateMetadata({ params} : PosteProps) {
  const {poste} = await getPoste(params.posteId);
  return {
    title: `${poste?.title}`,
    description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${poste?.title}`,

    app : {
      name: 'unem',
      url: 'https://unem2000.com',
    },
    openGraph: {
      title: `unem - ${poste?.title}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${poste?.title}`,
      url : `/${poste?.id}`,
      siteName: 'unem',
      type: 'website',
      locale: 'ar_MA',
      Images : [
        {
          url: poste?.thumbnail?.url || poste?.images[0].url,
          width: 1260,
          height: 800,
          alt: `unem - ${poste?.title}`,
        }
      ]
    },
    twitter: {
      title : `unem - ${poste?.title}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${poste?.title}`,
      cardType: 'summary_large_image',
      site: '@unem',
      handle: '@unem',
      images : [poste?.thumbnail?.url || poste?.images[0].url],
    },
  };
}

export async function generateStaticParams() {
  const postes = await getAllPostes();
  return postes.map((poste) => ({
    params: {
      posteId: poste.id,
    },
  }));
}

export default async function Poste({ params }: PosteProps) {
  const {poste} = await getPoste(params.posteId);

  return  <Postes id={params.posteId} poste={poste} />
}
