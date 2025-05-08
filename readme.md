# VelociCar

**VelociCar** es una aplicación web full-stack para el alquiler y préstamo de vehículos, desarrollada como parte de un proyecto de formación en **Gammatech** con el apoyo de **Fund Ransd**.

Permite a los usuarios alquilar vehículos por días y también publicar sus propios vehículos para que otros puedan reservarlos. Además, la empresa VelociCar gestiona una flota oficial propia. La aplicación está desarrollada usando **Spring Boot** (backend), **React** (frontend) y **Postman** (para pruebas de API).

---

## Tecnologías utilizadas

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- H2 / PostgreSQL (según entorno)
- Lombok
- Spring Web
- Spring Security (opcional)

### Frontend
- React
- Vite o Create React App
- Axios
- React Router
- Bootstrap / TailwindCSS (opcional)

### Testing & Dev Tools
- Postman (pruebas API)
- Spring Boot DevTools
- Git y GitHub

---

## Tipos de usuarios y roles

### Invitado (sin cuenta)
- Ver listado de vehículos disponibles.
- Filtrar por tipo (coche, moto, bici), precio, ciudad...
- Ver detalles del vehículo (marca, modelo, precio/día).
- Invitación a registrarse para reservar o prestar vehículos.

### Usuario registrado (normal)
- Reservar vehículos por días concretos.
- Publicar su propio vehículo (opcional: con revisión previa).
- Ver y cancelar sus reservas activas.
- Ver historial de reservas.
- Editar perfil y contraseña.

### Usuario "prestador" (owner)
- Todos los permisos del usuario normal.
- Ver y editar sus vehículos listados.
- Cambiar disponibilidad de sus vehículos.
- Ver quién ha reservado sus vehículos (opcional).

### Administrador (VelociCar)
- Añadir vehículos propios de la empresa.
- Ver y gestionar todos los vehículos (incluidos los de usuarios).
- Aprobar o rechazar vehículos subidos por usuarios.
- Ver todas las reservas del sistema.
- Eliminar cuentas de usuario si es necesario.

---

## Funcionalidades clave

### Alquiler de vehículo
- Escoger fechas de inicio y fin.
- Ver disponibilidad en ese rango.
- Calcular precio automáticamente.
- Realizar reserva y recibir confirmación.

### Publicar vehículo (modo "prestador")
- Subir fotos del vehículo (opcional).
- Introducir datos: tipo, marca, modelo, matrícula, precio/día, ubicación.
- Validación de matrícula única.
- Estado del vehículo: activo, en revisión o desactivado.

### Panel de usuario
- Ver reservas activas y pasadas.
- Gestionar vehículos publicados.
- Cancelar reservas (con restricción de 24h de antelación).

### Panel de administrador
- Lista global de usuarios, vehículos y reservas.
- Control de vehículos prestados por usuarios.
- Gestión y moderación manual de entradas.
- Eliminación de vehículos o reservas si es necesario.

### Página de inicio pública
- Vehículos destacados o recientes.
- Filtros por ciudad, precio o tipo.
- Botón para registrarse o iniciar sesión.

---

## Estado del proyecto

Proyecto en desarrollo activo como parte de la formación de desarrollo web full-stack. Las funcionalidades se irán completando por fases.

---

## TODO - Funcionalidades del proyecto

### General
- [ ] Diseño de la base de datos (entidades y relaciones)
- [x] Configuración inicial del backend (Spring Boot)
- [x] Configuración inicial del frontend (React)
- [x] Conexión entre backend y frontend (API REST)
- [x] Documentación básica de la API en Postman

### Usuarios
- [ ] Registro de usuarios
- [ ] Inicio de sesión
- [ ] Roles: invitado, usuario, prestador, administrador
- [ ] Edición de perfil (nombre, contraseña, etc.)

### Vehículos
- [ ] Listado general de vehículos (accesible a invitados)
- [ ] Filtro por tipo, ciudad, precio
- [ ] Detalles individuales de cada vehículo
- [ ] Añadir vehículo (usuario prestador o admin)
- [ ] Editar vehículo propio
- [ ] Eliminar vehículo propio
- [ ] Subida de imágenes del vehículo
- [ ] Aprobación de vehículos por parte del administrador

### Alquiler y reservas
- [ ] Buscar disponibilidad por fechas
- [ ] Crear reserva
- [ ] Calcular precio por día automáticamente
- [ ] Ver reservas activas
- [ ] Ver historial de reservas
- [ ] Cancelar reserva (restricción de 24h)
- [ ] Ver quién reservó mi vehículo (como prestador)

### Panel de administrador
- [ ] Ver todos los usuarios
- [ ] Eliminar usuarios
- [ ] Ver todos los vehículos
- [ ] Aprobar / rechazar vehículos publicados por usuarios
- [ ] Ver todas las reservas
- [ ] Eliminar reservas

### Frontend (React)
- [ ] Página de inicio pública
- [ ] Formulario de login y registro
- [ ] Vista de vehículos con filtros
- [ ] Formulario de reserva
- [ ] Panel de usuario con reservas y vehículos publicados
- [ ] Panel de administrador
- [ ] Diseño responsive (adaptado a móvil y escritorio)

---

## Créditos

Desarrollado por Borja Merchan Mckenna.  
Formación realizada en **Gammatech** con el apoyo de **Fund Ransd**.


