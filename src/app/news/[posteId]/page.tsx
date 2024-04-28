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
      title : `unem - ${poste?.title}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${poste?.title}`,
      url: 'https://unem2000.com',
      siteName: 'unem2000',
      images: [
        {
          url: poste?.thumbnail?.url || poste?.images[0]?.url || '/logo.png', // Dynamic og route
          width: 800,
          height: 600,
        },
        {
          url: poste?.images[0]?.url || '/logo.png', // Dynamic og route
          width: 1800,
          height: 1600,
          alt: poste?.thumbnail?.name || poste?.images[0]?.name || '/logo.png',
        },
      ],
    },
    twitter: {
      title : `unem - ${poste?.title}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${poste?.title}`,
      cardType: 'summary_large_image',
      site: '@unem',
      handle: '@unem',
      images : [poste?.thumbnail?.url || poste?.images[0]?.url || '/logo.png'],
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
