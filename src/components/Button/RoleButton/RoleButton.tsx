import { ComponentType, SVGProps } from "react";
import styles from "./RoleButton.module.css";

interface RoleButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>; // Icono principal (carrito, maletín, etc.)
  titulo: string;         // Texto grande
  subtitulo: string;      // Texto pequeño debajo
  flecha: ComponentType<SVGProps<SVGSVGElement>>; // Flecha que apunta a la derecha
  onClick: () => void;    // Acción al hacer clic
  variant?: "comprador" | "vendedor"; // Estilo visual del botón
  ariaLabel?: string;     // Accesibilidad, lo que lee el lector de pantalla
}

const RoleButton = ({
  icon: Icon,
  titulo,
  subtitulo,
  flecha: FlechaDerecha,
  onClick,
  variant = "comprador",
  ariaLabel,
}: RoleButtonProps) => {
  const clases = [
    styles.wrapper,
    styles[variant],
  ].join(" ");

  return (
    <button
      type="button"
      className={clases}
      onClick={onClick}
      aria-label={ariaLabel || `${titulo}, ${subtitulo}`} // Accesibilidad por defecto
    >
      <div className={styles.container}>
        <div className={styles.iconBox}>
          <Icon className={styles.icon} />
        </div>
        <div className={styles.textos}>
          <span className={styles.titulo}>{titulo}</span>
          <span className={styles.subtitulo}>{subtitulo}</span>
        </div>
        <div className={styles.arrowBox}>
          <FlechaDerecha className={`${styles.flecha} arrow`} />
        </div>
      </div>
    </button>
  );
};

export default RoleButton;


//MODO DE USO:
// import RoleButton from "@/components/RoleButton/RoleButton";
// import {
//   CarritoAzul,
//   TiendaNaranja,
//   FlechaDerecha808080,
// } from "@/assets/icons";

// function ElegirRolPage() {
//   return (
//     <div>
//       <RoleButton
//         icon={CarritoAzul}
//         titulo="Soy comprador"
//         subtitulo="Haz tu pedido y elige el mejor precio"
//         flecha={FlechaDerecha808080}
//         variant="comprador"
//         onClick={() => console.log("Comprador")}
//         ariaLabel="Soy comprador, quiero hacer un pedido para recibir presupuestos"
//       />

//       <RoleButton
//         icon={TiendaNaranja}
//         titulo="Soy vendedor"
//         subtitulo="Pasa presupuestos y vende ahora"
//         flecha={FlechaDerecha808080}
//         variant="vendedor"
//         onClick={() => console.log("Vendedor")}
//         ariaLabel="Soy vendedor, Pasaré presupuesto y venderé o brindaré un servicio"
//       />
//     </div>
//   );
// }
