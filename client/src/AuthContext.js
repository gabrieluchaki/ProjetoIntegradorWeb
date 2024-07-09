import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    if (token && userName && userId) {
      setUser({ token, name: userName, id: userId });
    }
  }, []);

  const login = (token, userName, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userId', userId);
    setUser({ token, name: userName, id: userId });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    setUser(null);
  };

  const updateUserName = (newName) => {
    localStorage.setItem('userName', newName);
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
