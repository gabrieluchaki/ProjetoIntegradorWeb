import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext'; // Verifique o caminho correto
import './Header.css';

function Header({ onLoginClick }) {
  const { user, logout } = useContext(AuthContext);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isMapDropdownOpen, setMapDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
    setMapDropdownOpen(false);
  };

  const toggleMapDropdown = () => {
    setMapDropdownOpen(!isMapDropdownOpen);
    setUserDropdownOpen(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li
            className="dropdown"
            onMouseEnter={toggleMapDropdown}
            onMouseLeave={toggleMapDropdown}
          >
            <button className="dropbtn">Mapa</button>
            {isMapDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/complete-posts">Postagens Completas</Link>
                <Link to="/potential-posts">Postagens Potenciais</Link>
              </div>
            )}
          </li>
          <li><Link to="/observation-articles">Artigos de Observação</Link></li>
          <li><Link to="/environmental-education">Educação Ambiental</Link></li>
          <li><Link to="/curation">Curadoria</Link></li>
          <li><Link to="/scientific-data">Dados Científicos</Link></li>
          {user ? (
            <li className="user-dropdown" onMouseEnter={toggleUserDropdown} onMouseLeave={toggleUserDropdown}>
              <span className="welcome-text">Bem-vindo, {user.name}</span>
              {isUserDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/profile">Perfil</Link>
                  <Link to="/notifications">Notificações</Link>
                  <button className="dropdown-button" onClick={logout}>Logout</button>
                </div>
              )}
            </li>
          ) : (
            <li><button className="login-button" onClick={onLoginClick}>Login</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
