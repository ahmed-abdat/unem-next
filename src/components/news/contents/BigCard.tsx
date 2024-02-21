import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NewsPoste } from "@/types/news-poste";
// import { redirect } from 'next/navigation'
import Image from "next/image";
import CardContainer from "./CardContainer";

export default function BigCards({
  card,
  index,
}: {
  card: NewsPoste;
  index: number;
}) {

  return (
    <CardContainer id={card.id} index={index} isBigCard>
      <div
        className={cn(
          {
            "h-[300px] sm:min-h-[350px]": index === 0,
            "h-[300px] md:h-[120px] sm:min-h-[100px] md:order-1 lg:max-w-[30%]": index !== 0,
          },
          "cursor-pointer rounded-sm  w-full max-w-full relative"
        )}
      >
        <span className={cn({
          'md:h-0' : index !== 0,
        }, "absolute -bottom-1 right-10 w-16 z-20 h-2 bg-news-border")}></span>
        <Image
          src={card.images[0]?.url}
          alt={card.title}
          className="object-cover relative"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw"
          priority={true}
          loading="eager"
        />
      </div>
      <div className={cn({
        'md:py-4' : index === 0,
        'md:px-2' : index !== 0
      }, "p-4 ")}>
        <h3
          className={cn(
            {
              "text-xl md:text-3xl font-aljazira md:mb-2": index === 0,
              "text-xl md:text-base": index !== 0,
            },
            "font-aljazira font-bold leading-normal hover:underline"
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            {
              "md:text-lg": index === 0,
              "md:text-sm": index !== 0,
            },
            " text-muted-foreground font-aljazira font-normal mt-2"
          )}
        >
          {card.description.slice(0, 150)}
        </p>
      </div>
      <Separator className="mb-6 md:mb-4 md:hidden" />
    </CardContainer>
  );
}
