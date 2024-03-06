import Postes from "@/components/news/poste/Poste";
import {getPoste , getAllPostes} from '@/app/action'




interface PosteProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params} : PosteProps) {
  const {poste} = await getPoste(params.slug,  "student-space");
  return {
    title: `${poste?.title}`,
    description: `الاتحاد الوطني لطلبة موريتانيا - الكليات - ${poste?.title}`,

    app : {
      name: 'unem',
      url: 'https://uneme.vercel.app',
    },
    openGraph: {
      title : `unem - ${poste?.title}`,
      description: `الاتحاد الوطني لطلبة موريتانيا - مساحة الطالب - ${poste?.title}`,
      url: 'https://unem2000.com',
      siteName: 'unem2000',
      images: [
        {
          url: poste?.thumbnail?.url || poste?.images[0].url, // Dynamic og route
          width: 800,
          height: 600,
        },
        {
          url: poste?.images[0].url, // Dynamic og route
          width: 1800,
          height: 1600,
          alt: poste?.thumbnail?.name || poste?.images[0].name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const postes = await getAllPostes("student-space");
  return postes.map((poste) => ({
    params: {
      slug: poste.id,
    },
  }));
}

export default async function Poste({ params }: PosteProps) {
  const {poste} = await getPoste(params.slug,  "student-space");

  return  <Postes id={params.slug} poste={poste} />
}
