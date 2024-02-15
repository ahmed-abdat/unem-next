import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NewsPoste } from "@/types/news-poste";
import { showTime } from "@/utils/showTime";
import Image from "next/image";

export default function Card({
  card,
  index,
  router,
  last
}: {
  card: NewsPoste;
  index: number;
  router: any;
  last? : number
}) {
 
  
  return (
    <>
      <div
        className="cursor-pointer w-full h-full bg-white pb-5 md:self-start px-4 gap-x-3"
        key={`${card.id}-${index}`}
        onClick={() => router.push(`news/${card.id}`)}
      >
         <div className="flex justify-between gap-x-2">
          <h3 className={cn({
            
          }, "font-tajawal font-semibold text-base hover:underline ")}>
            {card.title}
          </h3>
         <div className=" cursor-pointer rounded-sm h-[100px] min-w-[130px]  max-w-full relative md:min-h-[150px] md:min-w-[200px]">
          <Image
            src={card.images[0]?.url}
            alt={card.title}
            className="object-cover relative"
            fill
          />
        </div>
         </div>
       
      {
        last !== index &&  <Separator className="md:hidden  md:max-w-[60%] md:self-start my-4" />
      }
      </div>
    </>
  );
}
