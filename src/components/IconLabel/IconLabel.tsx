import { ComponentType, SVGProps } from "react";
import styles from "./IconLabel.module.css";

interface IconLabelProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>; // esto le dice a TS, el icon será un componente React que renderiza un SVG
  label: string;
  variant?: "footer" | "menuVendedor" | "pendientes"; //para usar en el Footer, Menú vendedor horizontal, Pendientes (menú vertical)
  active?: boolean;
  badgeCount?: number;
  onClick?: () => void;
}

const IconLabel = ({
  icon: Icon,
  label,
  variant = "footer",
  active = false,
  badgeCount = 0,
  onClick = () => {},
}: IconLabelProps) => {
  const showBadge = badgeCount > 0 && variant !== "footer";

  const clases = [
    styles.wrapper,
    styles[variant],
    active ? styles.active : "",
  ].join(" ");

  return (
    <button
      type="button"
      className={clases}
      aria-label={label}
      onClick={onClick}
    >
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
        {showBadge && <span className={styles.badge}>{badgeCount}</span>}
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default IconLabel;