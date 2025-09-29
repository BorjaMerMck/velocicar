import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css';
import { FaUser, FaUserPlus, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo"></div>
          <span className="brand-name">VelociCar</span>
        </div>
        
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/vehicles">Vehículos</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          {isAuthenticated ? (
            <li className="user-menu">
              <div className="user-info">
                <FaUser className="user-icon" />
                <span className="user-name">{user.fullName}</span>
                <FaChevronDown className="dropdown-icon" />
              </div>
              <div className="user-dropdown">
                <Link to="/profile" className="dropdown-item">
                  <FaUser className="icon" />
                  <span>Mi Perfil</span>
                </Link>
                <Link to="/reservations" className="dropdown-item">
                  <FaUser className="icon" />
                  <span>Mis Reservas</span>
                </Link>
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <FaSignOutAlt className="icon" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            </li>
          ) : (
            <li className="auth-buttons">
              <Link to="/login" className="login-btn">
                <FaUser className="icon" />
                <span>Iniciar Sesión</span>
              </Link>
              <Link to="/register" className="register-btn">
                <FaUserPlus className="icon" />
                <span>Registrarse</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;