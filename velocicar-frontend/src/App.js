import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- IMPORTANTE
import Home from './pages/Home';
import VehicleList from './components/VehicleList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Más rutas como /login, /register próximamente */}
      </Routes>
      <Footer /> {/* <-- Footer siempre visible debajo del contenido */}
    </Router>
  );
}

export default App;
