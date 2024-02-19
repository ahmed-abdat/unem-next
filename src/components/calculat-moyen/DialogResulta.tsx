import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
  } from "@/components/ui/dialog";
  import { Button } from "../ui/button";
  import { cn } from "@/lib/utils";
  import Image from "next/image";
  export default function DialogResulta({
    isOpen,
    setIsOpen,
    moyenGenerale,
    congrateText,
    subText
  }: {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    moyenGenerale: number | null;
    congrateText?: string;
    subText?: string;
  }) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent
          className={cn(
            {
              "bg-green-300": moyenGenerale && moyenGenerale > 10,
            },
            "max-w-[95%] sm:max-w-[65%] md:max-w-[50%] lg:max-w-[40%] rounded-lg"
          )}
        >
          <DialogHeader>
            <DialogDescription>
              <h2
                className={cn(
                  {
                    "text-green-800 flex items-center justify-center": moyenGenerale && moyenGenerale > 10,
                    "text-gray-600": moyenGenerale && moyenGenerale < 10,
                  },
                  "font-tajawal font-semibold text-xl text-center"
                )}
              >
                {
                  moyenGenerale && moyenGenerale <= 10 ? <span> {subText || 'معدلك التوجيهي هو'} </span>  :  moyenGenerale && moyenGenerale > 10 && <>
                  <span> {congrateText || 'مبروك معدلك التوجيهي هو'}</span>
                  <Image src="/conngrat.gif" width={85} height={100} className='flex items-center justify-center object-cover transform rotate-[93deg] h-[100px] w-[85px] ' alt="congratilation"/>
                  </>
                }
        
              </h2>
              <h3
                className={cn(
                  {
                    "text-green-800": moyenGenerale && moyenGenerale > 10,
                    "text-gray-600": moyenGenerale && moyenGenerale < 10,
                  },
                  "font-robo font-semibold text-9xl  py-4 text-center"
                )}
              >
                {moyenGenerale}
              </h3>
  
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className={cn(
                {
                  "bg-green-800": moyenGenerale && moyenGenerale >= 10,
                },
                "w-full font-tajawal py-6 font-medium text-lg"
              )}
              onClick={() => setIsOpen(false)}
            >
              اغلاق
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  