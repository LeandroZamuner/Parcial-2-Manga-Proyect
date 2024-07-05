import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ carouselImages }) => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
      {carouselImages.map(image => (
        <div key={image.id}>
          <img src={image.imageUrl} alt={`Imagen ${image.id}`} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
