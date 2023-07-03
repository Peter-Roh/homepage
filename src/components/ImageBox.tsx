import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IImageArray } from '../types/types';

type ImageBoxProps = {
  images: IImageArray[];
};

function ImageBox({ images }: ImageBoxProps) {
  return (
    <Carousel showArrows infiniteLoop swipeable emulateTouch showThumbs={false}>
      {images.map((elt) => {
        return (
          <div key={elt.title}>
            <img src={elt.imgUrl} alt={elt.title} />
            <p className="legend">{elt.title}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ImageBox;
