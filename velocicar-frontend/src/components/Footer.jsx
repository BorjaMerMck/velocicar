import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Descubre VelociCar</h4>
          <ul>
            <li><a href="#">Catálogo particulares</a></li>
            <li><a href="#">Catálogo profesionales</a></li>
            <li><a href="#">Centro de Ayuda</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>&nbsp;</h4>
          <ul>
            <li><a href="#">VelociCar Store</a></li>
            <li><a href="#">VO Selección</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contactar</h4>
          <p>info@velocicar.com</p>
          <p>+34 911 000 000</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-x-twitter"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/imgicon.png" alt="VelociCar Logo" />
          <span>© VelociCar 2025</span>
        </div>
        <ul>
          <li><a href="#">Condiciones de uso</a></li>
          <li><a href="#">Términos de suscripción</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
