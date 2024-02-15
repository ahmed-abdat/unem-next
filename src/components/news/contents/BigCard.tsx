import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NewsPoste } from "@/types/news-poste";
import Image from "next/image";

export default function BigCards({
  card,
  index,
  router,
}: {
  card: NewsPoste;
  index: number;
  router: any;
}) {
  return (
    <div
      className={cn(
        {
          "md:row-span-3": index === 0,
          "md:flex": index !== 0,
        },
        "cursor-pointer w-full bg-white "
      )}
      key={`${card.id}-${index}`}
      onClick={() => router.push(`news/${card.id}`)}
    >
      <div
        className={cn(
          {
            "h-[350px] sm:min-h-[420px]": index === 0,
            "h-[350px] md:h-[120px] sm:min-h-[100px] md:order-1 lg:max-w-[30%]": index !== 0,
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
        />
      </div>
      <div className={cn({
        'md:py-4' : index === 0,
        'md:px-2' : index !== 0
      }, "p-4 ")}>
        <h3
          className={cn(
            {
              "text-xl md:text-3xl font-rb md:mb-2": index === 0,
              "text-xl md:text-base": index !== 0,
            },
            "font-tajawal font-semibold hover:underline"
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
            " text-muted-foreground font-noto mt-1"
          )}
        >
          {card.description.slice(0, 150)}
        </p>
      </div>
      <Separator className="mb-6 md:mb-4 md:hidden" />
    </div>
  );
}
