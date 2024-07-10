import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function Profile() {
  const { user, updateUserName } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    genero: '',
    email: '',
    telefone: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      axios.get(`${API_URL}/usuarios/${user.id}`)
        .then(response => {
          const data = response.data;
          // Converter data de nascimento para o formato yyyy-MM-dd
          const formattedDate = new Date(data.dataNascimento).toISOString().split('T')[0];
          setFormData({
            ...data,
            dataNascimento: formattedDate
          });
        })
        .catch(error => {
          console.error('Erro ao buscar os dados do usuário:', error);
        });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/usuarios/${user.id}`, formData);
      console.log('Perfil atualizado com sucesso:', response.data);
      updateUserName(formData.nome);
      toast.success('Informações salvas com sucesso!', {
        onClose: () => navigate(-1) // Retorna à página anterior
      });
    } catch (error) {
      console.error('Erro ao atualizar o perfil:', error);
      toast.error('Erro ao salvar informações. Tente novamente.');
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Editar Perfil</h2>
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
            <option value="MASCULINO">Masculino</option>
            <option value="FEMININO">Feminino</option>
            <option value="OUTRO">Outro</option>
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
          
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
