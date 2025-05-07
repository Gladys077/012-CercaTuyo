import React from "react"
import styles from"./Button.module.css" //Usemos module.css para que no haya conflictos de estilos entre componentes

function Button({
    children, // texto del botón
    variant = "primary", // variante del botón (primary o secondary)
    section = "common", // sección del botón (common, buyer o seller)
    size = "form", // tamaño del botón (form o section)
    fullWidth = true, // true = 'full' | false = 'half' -> ancho completo o no
    disabled = false, // deshabilitado o no
    type = "button", // tipo del botón (button, submit o reset)
    onClick,
}) {
    const classes = [   // CLASES CSS del botón
        styles.btn,          // clase base
        styles[variant],        // variante del botón (primary o secondary)
        styles[section],      
        styles[size],
        fullWidth ? styles.full : styles.half, //si fullWidth es true, usará la clase 'full', si no, usará 'half'
    ].join(" ");

    return (
        <button
            className={classes}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}            {/* texto del botón */}
        </button>
    );
}

export default Button; 

