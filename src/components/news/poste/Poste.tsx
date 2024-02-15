"use client";

import { doc, getDoc } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";
import { useEffect, useMemo, useState } from "react";
import { app } from "@/config/firebase";
// import Video from "./Video";
import { showTime, showTimeDate } from "@/utils/showTime";
import { DocumentData } from "firebase/firestore";
import { toast } from "sonner";
import Image from "next/image";
import SharePoste from "./SharePoste";
import PosteSkelton from "../../skelton/PosteSkeleton";
import { Carousele } from "@/components/Caresol";
import Dialoge from "@/components/Dialoge";
// import PosteSkelton from "./PosteSkelton";
// import ViewFullImage from "./ViewImage";
function Poste({ id }: { id: string }) {
  const [poste, setPoste] = useState<DocumentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const firestore = getFirestore(app);

  useEffect(() => {
    const getPoste = async (id: string) => {
      const docRef = doc(firestore, "postes", id);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPoste(docSnap.data());
          localStorage.setItem("poste", JSON.stringify(docSnap.data()));
        } else {
          console.log("No such document!");
          setIsLoading(false);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getPoste(id);
  }, [id, firestore]);

  const url = `https://unem.vercel.app/news/${id}`;
  const handelCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success("تم نسخ الرابط بنجاح");
  };

 // handel selected image
    const selectedImage = (url : string) => {
      if (url) {
        setImage(url);
        setIsImageSelected(true);
      }
    };

  return (
    <>
      {isLoading ? (
        <PosteSkelton />
      ) : (
        <>
          <Dialoge isOpen={isImageSelected} setIsOpen={setIsImageSelected}>
            <Carousele images={poste?.images} selectedImage={image}/>
          </Dialoge>
          <section className="pt-6 bg-white min-h-[85dvh] sm:py-[20px] sm:px-4 ">
            <div className=" md:max-w-[80dvw]">
              <h1 className="font-rb text-2xl font-bold md:text-4xl pb-2">
                {poste?.title}
              </h1>
            </div>

            <div className="max-h-[412px] h-[300px] md:h-[420px] w-full overflow-hidden relative p-0 md:max-w-[80dvw]">
              <Image
                src={poste?.images[0].url}
                alt={poste?.title}
                fill
                className="object-center object-cover"
              />
            </div>

            <div className="flex flex-col m-3 py-0 px-4 gap-4 border-r-[5px] border-disabeld-btn md:max-w-[80dvw]">
              <div className="text-[0.85rem] text-muted-foreground flex items-center gap-[0.8rem] font-rb">
                <span className="create-time">
                  {showTime(poste?.createdAt)}
                </span>
                <span className="bar">|</span>
                <span className="update-time">
                  آخر تحديث : {showTimeDate(poste?.lasteUpdate)}
                </span>
              </div>
              <SharePoste handelCopy={handelCopy} url={url} />
            </div>
            <div className="p-3 leading-10 block font-noto text-[19px] text-gray-800 sm:min-w-[80dvw] lg:max-w-[60dvw] md:max-w-[80dvw]">
              <p>{poste?.description}</p>
            </div>
            <div className="px-3 mt-4 grid grid-cols-mobile gap-[0.3rem] sm:grid-cols-tablet sm:gap-[0.4rem] lg:grid-cols-desktop w-full h-full">
              {poste?.images.map((image: { url: string; title: string }) => (
                <div
                  className="relative max-w-full h-[250px] sm:h-[300px]"
                  key={image.url}
                >
                  <Image
                    src={image.url}
                    alt={poste?.title}
                    onClick={() => selectedImage(image.url)}
                    fill
                    className="object-center object-cover w-full h-full block rounded-md cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
export default Poste;
