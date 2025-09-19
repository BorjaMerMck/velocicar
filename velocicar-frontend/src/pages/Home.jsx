import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import VehicleCard from '../components/VehicleCard';
import '../styles/Home.css';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/vehicles');
        setVehicles(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
        setError('Error al cargar los vehículos');
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, dots: false } }
    ]
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-page">
    {/* Hero Banner */}
    <section className="hero-banner">
      <div className="hero-content">
        <h1>La mejor forma de moverte con libertad</h1>
        <h2>Alquila un vehículo o presta el tuyo con VelociCar</h2>
        <p>Explora nuestra flota y elige el vehículo perfecto para tu próxima aventura</p>
        <button className="cta-button">Registrarte</button>
      </div>
    </section>
  

      {/* Featured Vehicles */}
      <section className="featured-section">
        <h2>Nuestro Garaje</h2>
        <div className="vehicle-slider-container">
          <Slider {...sliderSettings}>
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="slide-item">
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="" alt="Disponibilidad" />
            <h3>Disponibilidad 24/7</h3>
            <p>Servicio de alquiler disponible en cualquier momento</p>
          </div>
          <div className="service-card">
            <img src="/assets/.png" alt="Seguro" />
            <h3>Seguro Incluido</h3>
            <p>Todos nuestros vehículos incluyen seguro a todo riesgo</p>
          </div>
          <div className="service-card">
            <img src="/images/delivery.png" alt="Entrega" />
            <h3>Entrega a Domicilio</h3>
            <p>Te llevamos el vehículo donde nos indiques</p>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services-section">
        <h2>Por qué suscribirte a VelociCar</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="" alt="Disponibilidad" />
            <h3>Sin permanencias </h3>
            <p>Tú decides cuánto tiempo te lo quieres quedar</p>
          </div>
          <div className="service-card">
            <img src="/images/insurance.png" alt="Seguro" />
            <h3>Sin esperas </h3>
            <p>Elige cuándo y dónde quieres tu vehículo</p>
          </div>
          <div className="service-card">
            <img src="/images/delivery.png" alt="Entrega" />
            <h3>Sin entradas </h3>
            <p>Sin cuota de entrada</p>
          </div>
        </div>
      </section>

    </div>
    
  );
};

export default Home;