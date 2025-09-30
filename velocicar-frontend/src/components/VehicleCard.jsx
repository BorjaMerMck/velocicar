import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  // Datos mock para propiedades que no están en el backend aún
  const mockData = {
    imageUrl: `/assets/homeimg.png`, // Usar la imagen que tienes
    year: vehicle.year || '2023',
    fuelType: vehicle.fuelType || 'Gasolina',
    kilometers: vehicle.kilometers || Math.floor(Math.random() * 50000) + 10000
  };

  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img 
          src={vehicle.imageUrl || mockData.imageUrl} 
          alt={vehicle.model || 'Vehículo'} 
          onError={(e) => {
            e.target.src = '/assets/homeimg.png';
          }}
        />
      </div>
      <div className="vehicle-info">
        <h3>{vehicle.brand} {vehicle.model}</h3>
        <p className="vehicle-year">{mockData.year}</p>
        <div className="vehicle-specs">
          <span>🚗 {vehicle.type}</span>
          <span>⛽ {mockData.fuelType}</span>
          <span>🧭 {mockData.kilometers.toLocaleString()} km</span>
        </div>
        <div className="vehicle-price">
          <span>{vehicle.pricePerDay}€/día</span>
          <Link to={`/vehicles/${vehicle.id}`} className="details-button">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;