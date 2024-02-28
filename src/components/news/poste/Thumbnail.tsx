import { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

export default function Thumbnail({
  imageSrc,
  videoUrl,
}: {
  imageSrc: string;
  videoUrl: string;
}) {
  const [isReady, setIsReady] = useState(false);
  

  return (
    <>
      <section className="w-full overflow-hidden p-0 max-h-full h-full md:max-w-[60dvw]">
        {videoUrl && (
          <ReactPlayer
            url={videoUrl}
            controls
            onReady={() => setIsReady(true)}
            pip={true}
            stopOnUnmount={false}
            width={"100%"}
            height={"100%"}
            onError={() =>  setIsReady(true)}
          />
        )}
      </section>
      {!isReady && (
        <div className="max-h-[500px] h-[420px] md:h-[480px] w-full overflow-hidden relative p-0 md:max-w-[60dvw]">
          <Image
            src={imageSrc}
            alt={"thumbnail"}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw"
            fetchPriority="high"
            priority={true}
            className="object-center object-cover"
          />
        </div>
      )}
    </>
  );
}
