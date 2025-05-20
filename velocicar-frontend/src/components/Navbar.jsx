import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaUser, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;