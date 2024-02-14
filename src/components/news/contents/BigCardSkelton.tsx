import { Skeleton } from "@/components/ui/skeleton";

export default function BigCardSkelton({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-x-4 gap-y-4 flex-col my-4 w-full lg:max-w-[60%] lg:self-start">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="w-full h-full">
            <Skeleton className="h-[300px] w-full rounded-sm " />
            <div className="p-2 w-full flex flex-col gap-y-2">
              <Skeleton className="w-[85%] h-5" />
              <Skeleton className="w-[80%] h-4" />
            </div>
          </div>
        ))}
    </div>
  );
}
