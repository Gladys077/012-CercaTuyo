import { useState } from "react";
import Header from "@/components/Header/Header";
import InputForm from "@/components/InputForm/InputForm";
import Button from "@/components/Button/Button/Button";
import GoogleButton from "@/components/Button/RoleButton/GoogleButton";
import {Visible} from "@/assets/icons";// suponiendo que lo convertiste a componente SVG
// import styles from "./LoginPage.module.css"; // Podés crearlo después si querés

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", formData);
    // Acá podrías hacer fetch/axios para autenticar
  };

  return (
    <main className={styles.main}>
      <Header title="¡Bienvenido!" />

      <form className={styles.form} onSubmit={handleLogin}>
        <InputForm
          label="Email o usuario"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@ejemplo.com"
        />

        <InputForm
          label="Contraseña"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="********"
          icon={<SvgVisible />}
          onClick={togglePasswordVisibility}
        />

        <Button text="Iniciar sesión" type="submit" />

        <div className={styles.divider}>O continúa con</div>

        <GoogleButton onClick={() => console.log("Google login")} />

        <p className={styles.register}>
          ¿No tienes cuenta? <a href="/registro">Regístrate</a>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
