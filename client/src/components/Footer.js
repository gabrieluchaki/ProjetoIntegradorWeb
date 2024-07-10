import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/privacy">Privacidade</Link></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="contact-info">
          <p>Endereço: Rua Exemplo, 123, Canoas, RS</p>
          <p>Contato: contato@ecocomunidade.com | Telefone: (51) 1234-5678</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
