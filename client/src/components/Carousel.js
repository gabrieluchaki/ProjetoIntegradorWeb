import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <ResponsiveCarousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showArrows={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={50} // Exibe duas fotos por vez
      >
        <div className="slide"><img src="images/example1.jpg" alt="Exemplo 1" /></div>
        <div className="slide"><img src="images/example2.jpg" alt="Exemplo 2" /></div>
        <div className="slide"><img src="images/example3.jpg" alt="Exemplo 3" /></div>
      </ResponsiveCarousel>
    </div>
  );
}

export default Carousel;
