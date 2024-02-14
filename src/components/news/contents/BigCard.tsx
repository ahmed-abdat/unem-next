import { Separator } from "@/components/ui/separator";
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
      className="cursor-pointer w-full h-full bg-white dm:max-w-[40dvh] pb-5 lg:max-w-[60%] lg:self-start"
      key={`${card.id}-${index}`}
      onClick={() => router.push(`news/${card.id}`)}
    >
      <div className="cursor-pointer rounded-sm h-[320px] sm:min-h-[350px] md:min-h-[400px] w-full  max-w-full relative">
        <span className="absolute -bottom-1 right-10 w-16 z-20 h-2 bg-news-border"></span>
        <Image
          src={card.images[0]?.url}
          alt={card.title}
          className="object-cover relative"
          fill
        />
      </div>

      <div className="p-4">
        <h3
          className={
            "font-tajawal font-semibold text-[1.25rem] hover:underline"
          }
        >
          {card.title}
        </h3>
        <p className="text-base text-muted-foreground font-noto mt-1">
          {card.description.slice(0, 150)}
        </p>
      </div>
      <Separator className="mb-2" />
    </div>
  );
}
