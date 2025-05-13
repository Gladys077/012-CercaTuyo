import './App.css'
import Button from './components/Button/Button.jsx'
import React, { useState } from "react";
import InputForm from './components/Button/Button.jsx';
import GoogleLogo from './assets/icons/fill/GoogleLogo.svg'
import { FaEye, FaEyeSlash, FaPencilAlt  } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import AppRouter from './routers/AppRouter.jsx'


function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    editable: "Texto editable",
    rol: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

<>

      <nav>
          <NavLink to={"/"}>LogIn</NavLink>
          <NavLink to={"/home" }>Home</NavLink>
      </nav>
      <AppRouter/>
  




    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <InputForm
        label="Nombre y Apellido"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Juan Pérez"
      />

      <InputForm
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="correo@ejemplo.com"
        type="email"
      />

      <InputForm
        label="Contraseña"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Tu contraseña"
        type={showPassword ? "text" : "password"}
        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
        onIconClick={togglePasswordVisibility}
      />

      <InputForm
        label="Campo editable"
        name="editable"
        value={formData.editable}
        onChange={handleChange}
        placeholder="Escribí algo"
        icon={<FaPencilAlt />}
      />

      <InputForm
        label="Rol"
        name="rol"
        value={formData.rol}
        onChange={handleChange}
        placeholder="Seleccioná un rol"
        as="select"
        options={[
          { value: "admin", label: "Administrador" },
          { value: "user", label: "Usuario" },
          { value: "guest", label: "Invitado" },
        ]}
      />
    </div>
        </>
  );
}

export default App;
