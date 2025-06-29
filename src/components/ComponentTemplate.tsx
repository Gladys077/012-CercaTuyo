import { ComponentType, SVGProps } from "react";
import styles from "./NOMBRE.module.css";

interface NOMBREProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>; // esto le dice a TS, el icon será un componente React que renderiza un SVG
  texto: string;
  activo?: boolean;
  onClick?: () => void;
  // Agregá más props según necesidad
}

const NOMBRE = ({
  icon: Icon,
  texto,
  activo = false,
  onClick,
}: NOMBREProps) => {
  const clases = [
    styles.wrapper,
    activo ? styles.activo : "",
  ].join(" ");

  return (
    <div className={clases} onClick={onClick}>
      {texto}
    </div>
  );
};

export default NOMBRE;
