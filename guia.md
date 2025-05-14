@anotaciones

<been> scope="singleton"






## Estortura de front
velocicar/
│
├
├── src/main/java
│   ├── com.velocicar.velocar/       
│   │   └── VelocicarApplication.java // Donde se ejecuta el backend
│
│   ├── com.velocicar.velocicar.controller/              
│   │   ├── VehicleController
|
│
│   ├── com.velocicar.velocicar.model/                   
│   │   ├── Vehicle.java 
│   │   ├── VehicleType.java    // Donde esta los tipos de vehiculos{Car,bici,motocicleta}
│
│   ├── com.velocicar.velocicar.repository/                
│   │   └── VehicleRepository.java    




## Estortura de front
velocicar-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                  # Archivos estáticos (imágenes, logos, iconos, etc.)
│   │   └── imgicon.png
│
│   ├── components/              # Componentes reutilizables (Navbar, VehicleCard, etc.)
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── VehicleCard.jsx
│   │   ├── VehicleList.jsx
│
│   ├── pages/                   # Páginas completas del sitio
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Login.jsx            # (cuando lo crees)
│   │   ├── Register.jsx         # (cuando lo crees)
│   │   ├── Vehicles.jsx         # (si tienes una página separada para vehículos)
│
│   ├── services/                # Lógica de conexión con el backend (axios, API fetchers)
│   │   └── vehicleService.js    # Ej: obtener, crear vehículos
│
│   ├── App.js                   # Rutas principales y estructura global
│   ├── App.css                  # Estilos globales
│   ├── index.js                 # Punto de entrada
│   └── logo.svg
│
├── .gitignore
├── package.json
├── README.md