import Postes from "@/components/news/poste/Poste";
import {getPoste} from '@/app/action'

export const revalidate = 86400;



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
      url: 'https://uneme.vercel.app',
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
          url: poste?.images[0].url,
          width: 1260,
          height: 800,
          alt: `unem - ${poste?.title}`,
        }
      ]
    },
  };
}

export default async function Poste({ params }: PosteProps) {
  const {poste} = await getPoste(params.posteId);

  
  

  return <Postes id={params.posteId} poste={poste} />;
}
