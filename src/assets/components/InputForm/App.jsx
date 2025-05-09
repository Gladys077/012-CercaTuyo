import { useState } from "react";
import InputForm from "./InputForm.jsx"
import Button from "../Button/Button.jsx"; 
import { visible, invisible } from "../../icons/outline"; 

function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [verPassword, setVerPassword] = useState(false);
  const [verConfirmar, setVerConfirmar] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="registro-container">
      <h1>Registro</h1>

      {/* Avatar + ícono */}
      <div className="avatar-container">
        <img src="/default-avatar.png" alt="avatar" />
        <button className="edit-icon-btn">
          <i className="edit-icon" />
        </button>
      </div>

      <InputForm
        label="Nombre y apellido"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre y apellido"
      />

      <InputForm
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="nombre@ejemplo.com"
        type="email"
      />

      <InputForm
        label="Contraseña"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Contraseña"
        type={verPassword ? "text" : "password"}
        icon={verPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
        onClick={() => setVerPassword(!verPassword)}
      />

      <InputForm
        label="Confirmar contraseña"
        name="confirmarPassword"
        value={form.confirmarPassword}
        onChange={handleChange}
        placeholder="Confirmar contraseña"
        type={verConfirmar ? "text" : "password"}
        icon={verConfirmar ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
        onClick={() => setVerConfirmar(!verConfirmar)}
      />

      <Button onClick={() => console.log("Registrar usuario")}>
        Iniciar sesión
      </Button>
    </main>
  );
}

export default Registro;
