"use client";

import { cn } from "@/lib/utils";
import { useRouter , usePathname} from "next/navigation";

interface CardContainerProps {
    id: string | undefined;
    path?: string;
    index: number;
    isBigCard?: boolean;
    children?: React.ReactNode;
    
}

export default function CardContainer({
  id,
  index,
  isBigCard,
  children,
  path
}: CardContainerProps) {
  const router = useRouter();

  console.log(path);

  const mainroute = path || 'license'

  
  return (
    <div
      className={
        isBigCard
          ? cn(
              {
                "md:row-span-3": index === 0,
                "md:flex": index !== 0,
              },
              "cursor-pointer w-full bg-white "
            )
          : 'cursor-pointer w-full h-full bg-white pb-5 md:self-start px-4 gap-x-3'
      }
      key={`${id}-${index}`}
      onClick={() => router.push(`${mainroute}/${id}`)}
    >
        {children}
    </div>
  );
}
