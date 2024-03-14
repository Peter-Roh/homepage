import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type TImage = {
  imgUrl: string;
  description: string;
};

type CarouselProps = {
  images: TImage[];
};

export default function Carousel({ images }: CarouselProps) {
  return (
    <ShadCarousel className="w-full max-w-xs lg:max-w-4xl">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              {/* eslint-disable */}
              <img
                className="aspect-[4/3] object-contain"
                src={image.imgUrl}
                alt={image.description}
              />
              {/* eslint-disable */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadCarousel>
  );
}
