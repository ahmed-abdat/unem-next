import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton({ count }: { count?: number }) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-y-6 lg:max-w-[85%] w-full md:self-start">
      {Array(count || 3)
        .fill(0)
        .map((_, index) => (
          <div
            className="cursor-pointer w-full h-full bg-white pb-5 md:self-start px-4 gap-x-3"
            key={index}
          >
            <div className="flex justify-between gap-x-2 ">
              <div className="flex flex-col gap-y-2 w-full h-full">
              <Skeleton className="w-[85%] h-6" />
              <Skeleton className="w-[80%] h-6" />
              <Skeleton className="w-[50%] h-5 hidden md:block" />
              </div>
              <Skeleton className="cursor-pointer rounded-sm h-[100px] min-w-[130px]  max-w-full relative md:min-h-[150px] md:min-w-[200px]" />
            </div>
          </div>
        ))}
    </div>
  );
}
