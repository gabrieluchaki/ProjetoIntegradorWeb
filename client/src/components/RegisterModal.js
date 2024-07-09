import React, { useState } from 'react';
import axios from 'axios';
import './RegisterModal.css'; // Importa o arquivo CSS para o modal

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const RegisterModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    genero: '',
    email: '',
    senha: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestUrl = `${API_URL}/usuarios`;
    const adjustedData = {
      ...formData,
      tipo: "COMUM",
      status: "PENDENTE",
      dataNascimento: new Date(formData.dataNascimento).toISOString(),
      genero: formData.genero.toUpperCase(),
    };
    try {
      await axios.post(requestUrl, adjustedData);
      setSubmitted(true);
    } catch (error) {
      console.error('Erro no cadastro:', error.response ? error.response.data : error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {isSubmitted ? (
          <div>
            <h2>Cadastro Enviado</h2>
            <p>O administrador vai avaliar a sua solicitação de cadastro. Se for aceito, você será informado por e-mail.</p>
            <button onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
              />
              
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                required
              />
              
              <label htmlFor="genero">Gênero:</label>
              <select
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
              
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              
              <button type="submit">Cadastrar</button>
            </form>
            <button className="close-button" onClick={onClose}>X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
