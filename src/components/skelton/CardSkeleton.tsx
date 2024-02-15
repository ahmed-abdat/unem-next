import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton({ count }: { count: number }) {
  return (
    <div className=" w-full h-full bg-white dm:max-h-[30dvh] pb-5 flex flex-col  lg:max-w-[60%] lg:self-start px-4 gap-x-4">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="w-full h-full py-4 lg:max-w-[60%] lg:self-start">
            <div className="flex flex-col gap-y-2">
            <Skeleton className="rounded-sm h-[120px] w-full" />
            <Skeleton className="w-[85%] h-6" />
            <Skeleton className="w-[80%] h-5" />
            </div>
          </div>
        ))}
    </div>
  );
}
