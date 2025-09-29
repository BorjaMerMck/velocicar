import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- IMPORTANTE
import Toast from './components/Toast';
import Home from './pages/Home';
import VehicleList from './components/VehicleList';
import Login from './pages/Login';
import Register from './pages/Register';

const AppContent = () => {
  const { login } = useAuth();
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const showToast = (message, type = 'success') => {
    setToast({
      isVisible: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  const handleLoginSuccess = (userData) => {
    // Generar un nombre realista basado en el email
    const emailPrefix = userData.email.split('@')[0];
    const firstName = userData.firstName || capitalizeFirst(emailPrefix.split('.')[0] || emailPrefix);
    const lastName = userData.lastName || capitalizeFirst(emailPrefix.split('.')[1] || ' ');
    
    const mockUserData = {
      id: 1,
      firstName,
      lastName,
      email: userData.email,
      fullName: `${firstName} ${lastName}`
    };
    
    login(mockUserData);
    showToast(`¡Bienvenido ${mockUserData.fullName}! Has iniciado sesión correctamente.`, 'success');
  };

  // Función helper para capitalizar la primera letra
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
        {/* Más rutas como /login, /register próximamente */}
      </Routes>
      <Footer /> {/* <-- Footer siempre visible debajo del contenido */}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
