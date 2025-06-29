import React, { ReactNode, MouseEventHandler, ReactElement, SVGProps, ComponentType } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "google";
  section?: "common" | "buyer" | "seller";
  height?: "form" | "section";
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ComponentType<SVGProps<SVGSVGElement>>; 
  iconPosition?: "left" | "right";
}

const Button = ({
  children, // texto del botón
  variant = "primary", // variante del botón (primary, secondary, google(login))
  section = "seller", // Background (common/púrpura, buyer/azul o seller/naranja)
  height = "form", // altura del botón ('form': 48px o 'section': 40px)
  fullWidth = false, // true = 'full' | false = 'half' -> ancho completo o no
  disabled = false, // deshabilitado o no
  type = "button", // tipo del botón (button, submit o reset)
  onClick,
  icon, // icono del botón (opcional)
  iconPosition = "left", // posición del icono (left o right)
}: ButtonProps ) => {
  const validPositions = ["left", "right"];
  const positionClass =
    icon && validPositions.includes(iconPosition) ? styles[iconPosition] : "";

  const classes = [
    // CLASES CSS del botón
    styles.btn, // clase base
    styles[variant], // variante del botón (primary, secondary, google)
    styles[section],
    styles[height],
    fullWidth ? styles.full : styles.half, //si fullWidth es true, usará la clase 'full', si no, usará 'half'
    positionClass, //si hay icono, usará la clase de la posición del icono (left o right)
  ].join(" ");

  const Icon = icon;

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.content}>
        {/* Contenedor del contenido del botón */}
        {/* Renderizamos el icono a la izquierda si existe y la posición es "left" */}
        {Icon && iconPosition === "left" && (
          <span className={styles.iconWrapper}>
            <Icon className={styles.icon} />
          </span>
        )}
        {children} {/* Texto del botón */}
        {/* Renderizamos el icono a la derecha si existe y la posición es "right" */}
        {Icon && iconPosition === "right" && (
          <span className={styles.iconWrapper}>
                        <Icon className={styles.icon} />
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;

// EJEMPLO USO: src/App.jsx
/*

import './App.css'
import {Button} from '../src/components/Button/Button.jsx'
import {EnviarBlanco} from '@/assets/icons"

function App() {
  return (
    <div>
      <h1>Probando Botón Primario/Vendedor</h1>

      <Button
        variant="secondary" 
        section="common" 
        size="form" 
        fullWidth={false} 
        disabled={false} 
        type="button"
        onClick={() => alert("Btn secundario")}
        >
        Cancelar
      </Button>
      <Button
        variant="primary" 
        section="common" 
        size="section" 
        fullWidth={false} 
        disabled={false} 
        type="button"
        onClick={() => alert("Botón Primario")}
        >
        Confirmar
      </Button>

      // BOTON QUE TIENE TODO EL ANCHO
      <Button
        variant="primary"
        section="seller"
        height="form"
        fullWidth={true}
        type="button"
        onClick={() => alert("Enviar")}
        icon={EnviarBlanco}
        iconPosition="left"
      >
        Enviar
      </Button>
    </div>
  );
}

export default App;
*/
