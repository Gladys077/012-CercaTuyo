import { ComponentType, CSSProperties, SVGProps } from "react";
import styles from "./ItemsAjustes.module.css";

interface ItemsAjustesProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>; // Componente SVG (ícono)
  texto: string;                                // Texto principal del ítem
  onClick?: () => void;                         // Función que se ejecuta al hacer clic (opcional)
  textoSecundario?: string;                           // Texto secundario opcional
  deshabilitado?: boolean;                      // Si está deshabilitado, no se puede interactuar (por si lo ponemos y no tenemos hecha la page)
  iconStyle?: CSSProperties;                    // Estilos dinámicos para el ícono (color, tamaño, etc.)
}

const ItemsAjustes = ({
  icon: Icon,         // Renombramos la prop `icon` como `Icon` para poder usarla como componente
  texto,
  onClick,
  textoSecundario,
  deshabilitado = false,
  iconStyle,          // Estilos personalizados para el ícono (pasados desde afuera)
}: ItemsAjustesProps) => {

  // Determina si este ítem debe comportarse como botón o no
  const esInteractivo = typeof onClick === "function" && !deshabilitado;

  return (
    <div
      className={styles.wrapper}                        // Estilo general del ítem
      onClick={esInteractivo ? onClick : undefined}     // Solo responde al clic si es interactivo
      role={esInteractivo ? "button" : undefined}       // Accesibilidad: se comporta como botón si corresponde
      tabIndex={esInteractivo ? 0 : undefined}          // Permite navegar con teclado si es interactivo
      aria-label={texto}                                // Accesibilidad: etiqueta descriptiva
      onKeyDown={(e) => {                               // Soporte para activar con Enter o Espacio
        if (esInteractivo && (e.key === "Enter" || e.key === " ")) {
          onClick?.();
        }
      }}
    >
      {/* Renderiza el ícono con estilo CSS + estilos dinámicos */}
      <Icon
        className={styles.icon}                         // Clase común para todos los íconos
        style={iconStyle}                               // Estilos pasados por props (color, fill, stroke, etc.)
        aria-hidden="true"                              // Accesibilidad: el ícono es decorativo
      />

      {/* Contenedor del texto */}
      <div className={styles.textoBox}>
        <span className={styles.texto}>{texto}</span>    {/* Texto principal */}
        {textoSecundario && (
          <span className={styles.textoSecundario}>{textoSecundario}</span> // Si hay subtítulo, lo mostramos
        )}
      </div>
    </div>
  );
};

export default ItemsAjustes;
