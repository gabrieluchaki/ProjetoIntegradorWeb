import React from 'react';
import './Home.css';
import Carousel from '../components/Carousel';
import ArticleLinks from '../components/ArticleLinks';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <img src="images/logo2.png" alt="EcoComunidade Logo" className="logo-center" />
        <h1>Bem-vindo ao EcoComunidade</h1>
        <p>EcoComunidade é uma plataforma interativa para explorar e contribuir para o mapeamento colaborativo da biodiversidade na região de Canoas. Nossa missão é criar uma comunidade ativa de entusiastas da natureza, contribuindo para a compreensão e preservação da biodiversidade.</p>
        <hr />
      </div>
      <div className="content-section">
        <Carousel />
        <ArticleLinks />
      </div>
    </div>
  );
}

export default Home;
