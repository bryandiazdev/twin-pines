// components/Gallery.tsx
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img height={400} width={800} style={{objectFit: 'cover'}} src={image} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
