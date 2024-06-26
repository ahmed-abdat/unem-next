import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NewsPoste } from "@/types/news-poste";
import Image from "next/image";
import { useRouter } from "next/router";
import CardContainer from "./CardContainer";
import { Accademics } from "@/types/accademics";
// import { redirect } from 'next/navigation'

export default function Card({
  card,
  index,
  last,
  path 
}: {
  card: Accademics;
  index: number;
  last? : number
  path? : string
}) {

 
  
  return (
    <>
      <CardContainer id={String(card.id)} index={index}>
         <div className="flex justify-between gap-x-2">
          <h3 className="font-aljazira font-semibold leading-normal text-base md:text-[1.25rem] hover:underline ">
            {card.title}
          </h3>
         <div className="cursor-pointer rounded-sm h-[100px] min-w-[130px]  max-w-full relative md:min-h-[150px] md:min-w-[200px]">
          <Image
            src={card?.thumbnail ?? card.images[0].url}
            alt={card.title}
            className="object-cover relative"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw"
            loading="eager"
            fill
            priority={true}
          />
        </div>
         </div>
       
      {
        last !== index &&  <Separator className="md:hidden  md:max-w-[60%] md:self-start my-4" />
      }
      </CardContainer>
    </>
  );
}
