// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Maps from './pages/Maps'; // Adicionando a nova página
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Approvals from './pages/Approvals';
import { AuthProvider } from './AuthContext';

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <AuthProvider>
      <Router>
        <div id="root">
          <Header onLoginClick={openLoginModal} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/maps" element={<Maps />} /> {/* Definindo a rota para a nova página */}
              <Route path="/approvals" element={<Approvals />} />
              {/* Defina outras rotas aqui */}
            </Routes>
          </main>
          <Footer />
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onRegisterClick={openRegisterModal} />
          <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
          <ToastContainer /> {/* Adicione isso */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
