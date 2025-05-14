import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleCard from '../components/VehicleCard';

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/vehicles')
        .then(res => setVehicles(res.data))
        .catch(err => console.error(err));
    }, []);
  
    return (
      <div>
        <h1>VelociCar</h1>
        <p>Bienvenido a la plataforma de alquiler de vehículos.</p>
  
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {vehicles.length === 0 ? (
            <p>No hay vehículos disponibles.</p>
          ) : (
            vehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
          )}
        </div>
        
      </div>
    );
  
    
  }


export default VehicleList;
