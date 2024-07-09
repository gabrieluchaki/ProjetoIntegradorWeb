import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../AuthContext';
import './LoginModal.css'; // Importa o arquivo CSS para o modal

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const LoginModal = ({ isOpen, onClose, onRegisterClick }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: formData.email,
        senha: formData.password, // Certifique-se de que os nomes dos campos correspondem ao backend
      });
      const { token, user } = response.data;
      login(token, user.name, user.id); // Inclua o ID do usuário
      onClose();
    } catch (error) {
      console.error('Erro no login:', error.response ? error.response.data : error.message);
      setError('Email ou senha incorretos!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Login</button>
        </form>
        <p>Não possui cadastro?  
          <button className="register-button" onClick={() => { onClose(); onRegisterClick(); }}>
            Clique aqui
          </button>
        </p>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginModal;
