import styles from"./Button.module.css" //Uso *.module.css para que no haya conflictos de estilos entre componentes

function Button({
    children, // texto del botón
    variant = "primary", // variante del botón (primary, secondary, google(login))
    section = "seller",  // sección del botón (common/púrpura, buyer/azul o seller/naranja)
    height = "section",  // altura del botón (form o section)
    fullWidth = false,   // true = 'full' | false = 'half' -> ancho completo o no
    disabled = false,    // deshabilitado o no
    type = "button",     // tipo del botón (button, submit o reset)
    onClick,
    icon,                // icono del botón (opcional)
    iconPosition = "left", // posición del icono (left o right)
}) {
    const classes = [   // CLASES CSS del botón
        styles.btn,          // clase base
        styles[variant],     // variante del botón (primary, secondary, google)
        styles[section],      
        styles[height],
        fullWidth ? styles.full : styles.half, //si fullWidth es true, usará la clase 'full', si no, usará 'half'
        styles[iconPosition], //si hay icono, usará la clase de la posición del icono (left o right)
    ].join(" ");

    return (
        <button
            className={classes}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={styles.content}> {/* Contenedor del contenido del botón */}
                {/* Renderizamos el icono a la izquierda si existe y la posición es "left" */}
                {icon && iconPosition === "left" && <span className={styles.iconWrapper}>{icon}</span>}
                
                {children}       {/* Texto del botón */}
                
                {/* Renderizamos el icono a la derecha si existe y la posición es "right" */}
                {icon && iconPosition === "right" && <span className={styles.iconWrapper}>{icon}</span>}
            </span>
        </button>
    );
}

export default Button; 


// USO: src/App.jsx
/*

import './App.css'
import Button from '../src/components/Button/Button.jsx'

function App() {
  return (
    <div>
      <h1>Probando Botón Primario/Vendedor</h1>

      <Button
        variant="secondary" 
        section="common" 
        size="form" 
        fullWidth={true} 
        disabled={false} 
        type="button"
        onClick={() => alert("google Login")}
        iconPosition='left' // Icono a la izquierda
        >
        Google
      </Button>
      <Button
        variant="primary" 
        section="common" 
        size="section" 
        fullWidth={false} 
        disabled={false} 
        type="button"
        onClick={() => alert("Botón Primario Vendedor")}
        >
        Confirmar
      </Button>
    </div>
  );
}

export default App;
*/  