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
    moyenGenerale: string | null;
    congrateText?: string;
    subText?: string;
  }) {

    const parstMoyenGenerale = parseFloat(moyenGenerale || "0");


    
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent
          className={cn(
            {
              "bg-green-300": moyenGenerale && parstMoyenGenerale >= 10,
            },
            "max-w-[95%] sm:max-w-[65%] md:max-w-[50%] lg:max-w-[40%] rounded-lg"
          )}
        >
          <DialogHeader>
            <DialogDescription>
              <h2
                className={cn(
                  {
                    "text-green-800 flex items-center justify-center": moyenGenerale && parstMoyenGenerale > 10,
                    "text-gray-600": moyenGenerale && parstMoyenGenerale < 10,
                  },
                  "font-tajawal font-semibold text-xl text-center"
                )}
              >
                {
                  moyenGenerale && parstMoyenGenerale <= 10 ? <span> {subText || 'معدلك التوجيهي هو'} </span>  :  moyenGenerale && parstMoyenGenerale > 10 && <>
                  <span> {congrateText || 'مبروك معدلك التوجيهي هو'}</span>
                  
                  </>
                }
        
              </h2>
              <div className="flex items-center justify-center gap-x-2">
              <Image src="/conngrat.gif" width={85} height={100} className='flex items-center justify-center object-cover transform rotate-[270deg] h-[100px] w-[85px] ' alt="congratilation"/>
              <h3
                className={cn(
                  {
                    "text-green-800": moyenGenerale && parstMoyenGenerale >= 10,
                    "text-gray-600": moyenGenerale && parstMoyenGenerale < 10,
                    'text-9xl' : moyenGenerale && String(moyenGenerale).length === 2,
                    'text-8xl' : moyenGenerale && String(moyenGenerale).length >= 3,
                  },
                  "font-robo font-semibold  py-4 text-center"
                )}
              >
                {moyenGenerale}
              </h3>
              <Image src="/conngrat.gif" width={85} height={100} className='flex items-center justify-center object-cover transform rotate-[0deg] h-[100px] w-[85px] ' alt="congratilation"/>
              </div>
  
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className={cn(
                {
                  "bg-green-800": moyenGenerale && parstMoyenGenerale >= 10,
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
  