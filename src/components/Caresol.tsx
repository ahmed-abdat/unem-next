import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
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

export function Carousele({ images  , selectedImage }: { images: Image[] , selectedImage? : string | null}) {

  const selctedImageIndex = images.findIndex((image) => image.url === selectedImage)



  return (
    <Carousel className="w-full max-w-sm min-h-[60dvh] max-h-[90dvh]" dir="ltr" opts={
      {
        startIndex: selctedImageIndex || 0,
      }
    }>
      <CarouselContent className="w-full h-full">
        {images.map((image) => (
          <CarouselItem key={image.url} className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full">
              <Card className="min-h-[60dvh]">
                <CardContent className="w-full relative min-h-[60dvh] overflow-hidden ">
                  <Image
                    src={image.url}
                    alt={image.title}
                   fill
                    className="object-center object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
