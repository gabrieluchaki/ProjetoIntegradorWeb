import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
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
        <Header onLoginClick={openLoginModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {/* Defina outras rotas aqui */}
          </Routes>
        </main>
        <Footer />
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onRegisterClick={openRegisterModal} />
        <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
        <ToastContainer /> {/* Adicione isso */}
      </Router>
    </AuthProvider>
  );
}

export default App;
