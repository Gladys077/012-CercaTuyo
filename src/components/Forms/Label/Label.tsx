import { ReactNode } from "react";
import styles from "./Label.module.css";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  icon?: ReactNode;
  subtext?: string;
  tooltip?: string;
  className?: string;
}

const Label = ({
  htmlFor, //atributo del elemente label para asociarlo con un campo del form
  children,
  required = false,
  icon,
  subtext,
  tooltip, //texto flotante con info, cuando pasan el mouse x encima
  className = "",
}: LabelProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label htmlFor={htmlFor} className={styles.label}>
        {children}
        {required && <span className={styles.required}> *</span>}
        {icon && <span className={styles.icon}>{icon}</span>}
        {tooltip && (
          <span className={styles.tooltip} title={tooltip}>
            ⓘ
          </span>
        )}
      </label>
      {subtext && <div className={styles.subtext}>{subtext}</div>}
    </div>
  );
};

export default Label;


