import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('Error al obtener vehículos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Vehículos disponibles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.brand} {vehicle.model} - {vehicle.type} - {vehicle.pricePerDay}€/día
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
