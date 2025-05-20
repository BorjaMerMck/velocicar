# Velocicar - Plataforma de Alquiler de Vehículos

## Descripción
Velocicar es una plataforma web moderna para el alquiler de vehículos, desarrollada con React en el frontend y Spring Boot en el backend.

## Tecnologías Utilizadas

### Frontend
- React 19.1.0
- React Router DOM 7.5.3
- Axios 1.9.0
- FontAwesome 6.7.2
- React Icons 5.5.0
- React Slick 0.30.3
- Slick Carousel 1.8.1

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- JWT para autenticación

## Estructura del Proyecto

### Frontend
```
velocicar-frontend/
├── public/                 # Archivos estáticos
├── src/                    # Código fuente
│   ├── components/         # Componentes React
│   ├── pages/             # Páginas principales
│   ├── styles/            # Archivos CSS
│   └── App.js             # Componente principal
├── package.json           # Configuración y dependencias
└── README.md             # Documentación
```

### Backend
```
velocicar-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/velocicar/
│   │   │       ├── controllers/
│   │   │       ├── models/
│   │   │       ├── repositories/
│   │   │       ├── services/
│   │   │       └── security/
│   │   └── resources/
│   │       └── application.properties
└── pom.xml
```

## Configuración del Entorno

### Requisitos Previos
- Node.js (v14 o superior)
- Java JDK 17
- MySQL 8.0
- Maven

### Frontend
1. Instalar dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm start
```

### Backend
1. Configurar la base de datos en `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/velocicar
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

2. Ejecutar la aplicación:
```bash
mvn spring-boot:run
```

## API Endpoints

### Autenticación
- POST `/api/auth/login` - Inicio de sesión
- POST `/api/auth/register` - Registro de usuarios

### Vehículos
- GET `/api/vehicles` - Listar todos los vehículos
- GET `/api/vehicles/{id}` - Obtener vehículo por ID
- POST `/api/vehicles` - Crear nuevo vehículo
- PUT `/api/vehicles/{id}` - Actualizar vehículo
- DELETE `/api/vehicles/{id}` - Eliminar vehículo

## Características Principales

### Frontend
- Diseño responsive y moderno
- Navegación intuitiva
- Carrusel de imágenes
- Formularios de autenticación
- Gestión de vehículos
- Integración con FontAwesome para iconos

### Backend
- Autenticación JWT
- Gestión de usuarios
- CRUD de vehículos
- Seguridad implementada con Spring Security
- Persistencia de datos con JPA/Hibernate

## Conexión Frontend-Backend

La comunicación entre frontend y backend se realiza mediante Axios:

```javascript
// Configuración de Axios
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
```

## Seguridad
- Implementación de JWT para autenticación
- CORS configurado para peticiones frontend
- Encriptación de contraseñas con BCrypt
- Protección de endpoints sensibles

## Mejores Prácticas Implementadas
1. Manejo de errores global
2. Interceptores para tokens JWT
3. Variables de entorno para configuración
4. Diseño responsive
5. Optimización de rendimiento

## Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto
Tu Nombre - [@tutwitter](https://twitter.com/tutwitter) - email@ejemplo.com

Link del Proyecto: [https://github.com/tuusuario/velocicar](https://github.com/tuusuario/velocicar)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





