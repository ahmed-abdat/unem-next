import Postes from "@/components/news/poste/Poste";
import {getPoste} from '@/app/action'



interface PosteProps {
  params: {
    posteId: string;
  };
}

export default async function Poste({ params }: PosteProps) {
  const {poste} = await getPoste(params.posteId);
  

  return <Postes id={params.posteId} poste={poste} />;
}
