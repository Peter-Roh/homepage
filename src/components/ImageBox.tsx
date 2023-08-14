import { Carousel } from "react-responsive-carousel";
import type { Image } from "../types";

type ImageBoxProps = {
  images: Image[];
};

function ImageBox({ images }: ImageBoxProps) {
  return (
    <>
      <Carousel
        autoFocus
        showArrows
        infiniteLoop
        swipeable
        emulateTouch
        useKeyboardArrows
        showThumbs={false}
        dynamicHeight={false}
      >
        {images.map((elt) => {
          return (
            <div key={elt.title}>
              <div className="max-h-screen">
                <img
                  className="aspect-[4/3] object-contain"
                  src={elt.imgUrl}
                  alt={elt.title}
                />
              </div>
              <p className="legend">{elt.title}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default ImageBox;
