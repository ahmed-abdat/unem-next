import { Separator } from "@/components/ui/separator";
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
        className="cursor-pointer w-full h-full bg-white dm:max-w-[20dvh] pb-5 flex flex-col md:max-w-[60%] md:self-start px-4 gap-x-3"
        key={`${card.id}-${index}`}
        onClick={() => router.push(`news/${card.id}`)}
      >
         <div className="flex justify-between gap-x-2">
          <h3 className="font-tajawal font-medium text-base hover:underline md:font-semibold md:text-[1.25rem]">
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
       
      </div>
      {
        last !== index &&  <Separator className="md:max-w-[60%] md:self-start mb-4" />
      }
    </>
  );
}
