import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IImageArray } from '../types/types';

type ImageBoxProps = {
  images: IImageArray[];
};

function ImageBox({ images }: ImageBoxProps) {
  return (
    <Carousel
      showArrows
      infiniteLoop
      swipeable
      emulateTouch
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
  );
}

export default ImageBox;
