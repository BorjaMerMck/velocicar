import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("✅ Formulario enviado:", formData);

    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', formData);
      alert("✅ Registro exitoso");
      console.log("Respuesta del backend:", res.data);
    } catch (err) {
      console.error("❌ Error al registrar:", err);
      alert("❌ Error al registrar");
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-box">
      <h2>Registro</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  </div>
);
};

export default Register;