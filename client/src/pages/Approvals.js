import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Approvals.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function Approvals() {
  const { user } = useContext(AuthContext);
  const [pendentes, setPendentes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/approvals');
      return;
    }

    axios.get(`${API_URL}/usuariosPendentes`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then(response => {
      setPendentes(response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar as aprovações:', error);
      toast.error('Erro ao buscar aprovações. Tente novamente.');
    });
  }, [user, navigate]);

  const handleApproval = (user, status) => {
    const updatedUser = { ...user, status };
    axios.put(`${API_URL}/usuarios/${user.id}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then(() => {
      setPendentes(prevPendentes => prevPendentes.filter(u => u.id !== user.id));
      toast.success(`Usuário ${status === 'ATIVO' ? 'aprovado' : 'bloqueado'} com sucesso!`);
    })
    .catch(error => {
      console.error(`Erro ao ${status === 'ATIVO' ? 'aprovar' : 'bloquear'} usuário:`, error);
      toast.error(`Erro ao ${status === 'ATIVO' ? 'aprovar' : 'bloquear'} usuário. Tente novamente.`);
    });
  };

  return (
    <div className="approvals-page">
      <div className="approvals-container">
        <h1>Aprovações Pendentes</h1>
        <div className="approvals-section">
          <h2>Usuários</h2>
          <ul>
            {pendentes.map((user) => (
              <li key={user.id} className="approval-item">
                <div className="user-info">
                  <p><strong>Nome:</strong> {user.nome}</p>
                  <p><strong>Status:</strong> {user.status}</p>
                  <p><strong>CPF:</strong> {user.cpf}</p>
                  <p><strong>Data de Nascimento:</strong> {new Date(user.dataNascimento).toLocaleDateString()}</p>
                  <p><strong>Gênero:</strong> {user.genero}</p>
                  <p><strong>Tipo:</strong> {user.tipo}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Telefone:</strong> {user.telefone}</p>
                </div>
                <div>
                  <button className="approve-button" onClick={() => handleApproval(user, 'ATIVO')}>Aprovar</button>
                  <button className="reject-button" onClick={() => handleApproval(user, 'BLOQUEADO')}>Rejeitar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="approvals-section">
          <h2>Postagens</h2>
          {/* Adicione aqui a lógica para exibir as postagens pendentes quando disponível */}
        </div>
      </div>
    </div>
  );
}

export default Approvals;
