import { Skeleton } from '@/components/ui/skeleton';


function PosteSkelton() {
  return <section className="py-[40px] bg-white min-h-[85dvh] sm:py-[30px] sm:px-4">
      <div className="mb-4 flex flex-col gap-y-2 md:max-w-[80dvw]">
        <Skeleton  className='w-full h-[30px]' />
        <Skeleton  className='w-full h-[30px]' />
        <Skeleton  className='w-2/3 h-[30px]' />
      </div>
    <div className="max-h-[412px] h-[300px] md:h-[420px] w-full overflow-hidden relative p-0 md:max-w-[80dvw]">
      <Skeleton className='h-[350px] w-full' />
    </div>
    <div className="flex  m-3 py-0 px-4 gap-4 border-r-[5px] border-disabeld-btn md:max-w-[80dvw]">
      <div className="text-[0.85rem] text-muted-foreground flex items-center gap-[0.8rem] font-rb w-full">
        <Skeleton className='w-1/2 h-[20px]'/>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <Skeleton className='w-[30px] h-[30px] rounded-full'  />
        <Skeleton className='w-[30px] h-[30px] rounded-full'  />
        <Skeleton className='w-[30px] h-[30px] rounded-full'  />
      </div>
    </div>
    <div className="p-3  flex flex-col gap-y-2 sm:min-w-[80dvw] lg:max-w-[60dvw]">
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
        <Skeleton className='h-[25px] w-full' />
    </div>
  </section>;
}
export default PosteSkelton;
