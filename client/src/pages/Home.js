import React from 'react';

function Home() {
  return (
    <div>
      <div className="intro-section">
        <img src="images/logo.png" alt="EcoComunidade Logo" className="logo" />
        <h1>Bem-vindo ao EcoComunidade</h1>
        <p>EcoComunidade é uma plataforma interativa para explorar e contribuir para o mapeamento colaborativo da biodiversidade na região de Canoas. Nossa missão é criar uma comunidade ativa de entusiastas da natureza, contribuindo para a compreensão e preservação da biodiversidade.</p>
        <hr />
      </div>
      <div className="carousel">
        <div className="slide"><img src="images/example1.jpg" alt="Exemplo 1" /></div>
        <div className="slide"><img src="images/example2.jpg" alt="Exemplo 2" /></div>
        <div className="slide"><img src="images/example3.jpg" alt="Exemplo 3" /></div>
      </div>
    </div>
  );
}

export default Home;
