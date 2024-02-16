import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { RxDownload } from "react-icons/rx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Image {
  url: string;
  title: string;
}

export function Carousele({
  images,
  selectedImage,
}: {
  images: Image[];
  selectedImage?: string | null;
}) {
  const selctedImageIndex = images.findIndex(
    (image) => image.url === selectedImage
  );

  return (
    <Carousel
      className="w-full max-w-sm min-h-[60dvh] max-h-[90dvh]"
      dir="ltr"
      opts={{
        startIndex: selctedImageIndex || 0,
        align: "center",
      }}
    >
      <CarouselContent className="w-full h-full">
        <RxDownload />
        {images.map((image) => (
          <CarouselItem
            key={image.url}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-full h-full relative min-h-[60dvh] overflow-hidden  border-none md:border bg-transparent md:bg-white">
              <Image
                src={image.url}
                alt={image.title || 'poste image'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
                className="object-center object-cover rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
