"use client";

import { useEffect, useState } from "react";
import { showTime, showTimeDate } from "@/utils/showTime";
import { toast } from "sonner";
import Image from "next/image";
import SharePoste from "./SharePoste";
import { Carousele } from "@/components/Caresol";
import Dialoge from "@/components/Dialoge";
import { DocumentData } from "firebase/firestore/lite";
import { Separator } from "@/components/ui/separator";
import Thumbnail from "@/components/news/poste/Thumbnail";
import { Skeleton } from "@/components/ui/skeleton";
function Poste({ poste , id } : { poste: DocumentData | null , id: string}) {
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isClient , setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  },[]);


  const url = `https://unem.vercel.app/news/${id}`;
  const handelCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success("تم نسخ الرابط بنجاح");
  };

  // handel selected image
  const selectedImage = (url: string) => {
    if (url) {
      setImage(url);
      setIsImageSelected(true);
    }
  };

  // scroll to top
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [poste]);

  return (
        <>
          <Dialoge isOpen={isImageSelected} setIsOpen={setIsImageSelected}>
            <Carousele images={poste?.images} selectedImage={image} />
          </Dialoge>
          <section className="pt-6 bg-white min-h-[85dvh] sm:py-[20px] sm:px-4 ">
            <div className=" md:max-w-[60dvw]">
              <h1 className="font-aljazira font-bold leading-normal text-[1.625rem] md:text-[2.5rem] md:leading-normal pb-2">
                {poste?.title}
              </h1>
            </div>   
            {
              isClient ? <Thumbnail imageSrc={poste?.thumbnail?.url ?? poste?.images[0].url} videoUrl={poste?.videoUrl} /> : <Skeleton className="w-full h-[300px] md:max-w-[70dvw]" />
            }
        

            <div className="flex flex-col m-3 py-0 px-4 gap-4 border-r-[5px] border-disabeld-btn md:max-w-[60dvw]">
              <div className="text-[0.85rem] text-muted-foreground flex items-center gap-[0.8rem] ">
                <span className="font-aljazira ">
                  {showTime(poste?.createdAt)}
                </span>
                <span className="bar">|</span>
                <span className="font-aljazira ">
                  آخر تحديث : {showTimeDate(poste?.lasteUpdate)}
                </span>
              </div>
              <SharePoste handelCopy={handelCopy} url={url} />
            </div>
            <div className="p-3 leading-10 block  text-[19px] text-gray-800 sm:min-w-[60dvw] lg:max-w-[60dvw] md:max-w-[60dvw]">
              <p className="font-aljazira font-normal">{poste?.description}</p>
            </div>
            <div className="px-3 mt-4 grid grid-cols-mobile gap-[0.3rem] sm:grid-cols-tablet sm:gap-[0.4rem] lg:grid-cols-desktop w-full h-full">
              {poste?.images.map((image: { url: string; title: string }) => (
                <div
                  className="relative max-w-full h-[250px] sm:h-[300px]"
                  key={image.url}
                >
                  <Image
                    src={image.url}
                    alt={poste?.title || 'poste image'}
                    onClick={() => selectedImage(image.url)}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-center object-cover w-full h-full block rounded-md cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </section>
          <Separator  />
        </>
  );
}
export default Poste;
