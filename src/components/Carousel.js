import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos CSS para el carousel

const App = () => {
  return (
    <Carousel>
      <div>
        <img src="/images/Carousel1.jpg" alt="Imagen 1" />
        <p className="legend">Texto descriptivo 1</p>
      </div>
      <div>
        <img src="/images/Carousel2.jpg" alt="Imagen 2" />
        <p className="legend">Texto descriptivo 2</p>
      </div>
      <div>
        <img src="/images/Carousel3.jpg" alt="Imagen 3" />
        <p className="legend">Texto descriptivo 3</p>
      </div>
    </Carousel>
  );
}

export default App;
