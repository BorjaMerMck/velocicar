# VelociCar

**VelociCar** es una aplicación web fullstack para el alquiler y préstamo de vehículos (coches, motos y bicis), desarrollada como proyecto de formación en **Gammatech** con el apoyo de **Fund Ransd**.

Permite a los usuarios alquilar vehículos por días y también publicar sus propios vehículos para que otros los reserven. Además, la empresa VelociCar gestiona su propia flota oficial. El stack técnico principal es **Spring Boot** (backend) y **React** (frontend), con **Postman** para pruebas de API.

---

## Tecnologías utilizadas

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- H2 y PostgreSQL según entorno
- Lombok
- Spring Web
- Spring Security (opcional)

### Frontend
- React
- Vite (o Create React App)
- Axios para peticiones HTTP
- React Router
- (Opcional) Bootstrap / TailwindCSS

### Testing & DevTools
- Postman (pruebas de API)
- Spring Boot DevTools
- Git y GitHub

---

## Tipos de usuarios y roles

### Invitado (no logueado)
- Ver listado de vehículos con filtros (tipo, precio, ciudad).
- Ver detalles de cada vehículo: marca, modelo, precio, etc.
- Invitación a crear cuenta para reservar o prestar vehículos.

### Usuario registrado
- Reservar vehículos indicando fechas concretas.
- Publicar su propio vehículo (requiere revisión de admin).
- Consultar y cancelar reservas activas.
- Ver histórico de reservas.
- Editar sus datos y contraseña.

### Prestador (owner)
- Puede hacer lo mismo que el usuario normal.
- Gestionar y editar sus vehículos publicados.
- Cambiar disponibilidad.
- Consultar quién reservó sus vehículos.

### Administrador (admin, VelociCar)
- Añadir y gestionar vehículos propios de la empresa.
- Ver y aprobar/rechazar vehículos publicados por usuarios.
- Ver y eliminar todas las reservas y usuarios.
- Moderación global de la plataforma.

---

## Funcionalidades principales

### Alquiler de vehículo
- Selección de fechas.
- Consulta de disponibilidad.
- Cálculo automático de precio.
- Confirmación de reserva.

### Publicar vehículo (Prestador)
- Subida de fotos.
- Formulario de datos: tipo, marca, modelo, matrícula, precio/día, ciudad, etc.
- Matrícula única.
- Estados: activo, en revisión, desactivado.

### Panel de usuario
- Ver y gestionar reservas (activas y anteriores).
- Gestionar vehículos propios.
- Cancelar reservas (hasta 24h antes del inicio).

### Panel de administrador
- Listado y gestión de usuarios, vehículos y reservas.
- Moderación y revisión de vehículos publicados.
- Eliminar reservas o vehículos.

### Página pública de inicio
- Vehículos destacados y recientes.
- Filtro por ciudad, precio o tipo.
- Acceso a registro/inicio de sesión.

---

## Estado del proyecto

Proyecto en desarrollo activo como parte de la formación de desarrollo web fullstack. Las funcionalidades principales están siendo implementadas por fases.

---

## Estructura de backend

```
velocicar/
|
├── src/main/java
│   └── com.velocicar.velocicar/
│       ├── VelocicarApplication.java        // Main
│       ├── controller/
│       │   └── VehicleController.java
│       ├── model/
│       │   ├── Vehicle.java
│       │   ├── VehicleType.java            // Enum: {CAR, BICI, MOTOCICLETA}
│       ├── repository/
│       │   └── VehicleRepository.java
```

## Estructura de frontend

```
velocicar-frontend/
│
├── public/
│   └── index.html
├── src/
│   ├── assets/                  # Imágenes, logos, iconos
│   │   └── imgicon.png
│   ├── components/              # Navbar, VehicleCard, etc.
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── VehicleCard.jsx
│   │   ├── VehicleList.jsx
│   ├── pages/                   # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Login.jsx            # (cuando exista)
│   │   ├── Register.jsx         # (cuando exista)
│   │   ├── Vehicles.jsx         # (opcional: página de vehículos)
│   ├── services/                # Comunicación con backend
│   │   └── vehicleService.js
│   ├── App.js                   # Rutas y estructura global
│   ├── App.css                  # Estilos globales
│   ├── index.js                 # Entry point
│   └── logo.svg
├── .gitignore
├── package.json
├── README.md
```

## TODO - Funcionalidades pendientes

### General
- [ ] Diseño de la base de datos
- [x] Configuración del backend (Spring Boot)
- [x] Configuración del frontend (React + Vite)
- [x] API REST funcionando
- [x] Documentación básica de la API (Postman)

### Usuarios
- [ ] Registro
- [ ] Inicio de sesión
- [ ] Distintos roles (invitado, usuario, prestador, admin)
- [ ] Edición de perfil

### Vehículos
- [ ] Listado general de vehículos
- [ ] Filtros (tipo, ciudad, precio)
- [ ] Vista de detalles
- [ ] Alta/editar/baja vehículo de usuario
- [ ] Subida de imágenes
- [ ] Aprobación de vehículos por admin
- [ ] Nuevos tipos, crear enum de etiqueta medioambiental y tipo de transmisión

### Alquiler/reservas
- [ ] Buscar disponibilidad por fecha
- [ ] Crear reserva
- [ ] Cálculo automático del precio
- [ ] Cancelación de reservas (<24h restricción)
- [ ] Ver historial de reservas

### Panel de administrador
- [ ] Gestión de todos los usuarios
- [ ] Gestión de todos los vehículos (aprobación, edición, borrado)
- [ ] Gestión de reservas

### Frontend (React)
- [x] Página de inicio
- [ ] Control de error si no se detecta backend (ejemplo: error.jsx)
- [ ] Formulario de login y registro
- [ ] Lista de vehículos con filtros
- [ ] Formulario de reserva
- [ ] Panel de usuario y de admin
- [ ] Diseño responsive

---

## Créditos

Desarrollado por Borja Merchan Mckenna.

Referencia de inspiración: [astaramove.com/catalogo](https://astaramove.com/catalogo)

**Comandos útiles:**
```
cd velocicar-frontend
npm start

cd velocicar
./mvnw spring-boot:run
```

