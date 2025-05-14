import React from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={vehicle.imageUrl || '/images/default-car.jpg'} alt={vehicle.model} />
      </div>
      <div className="vehicle-info">
        <h3>{vehicle.brand} {vehicle.model}</h3>
        <p className="vehicle-year">{vehicle.year}</p>
        <div className="vehicle-specs">
          <span>🚗 {vehicle.type}</span>
          <span>⛽ {vehicle.fuelType}</span>
          <span>🧭 {vehicle.kilometers} km</span>
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