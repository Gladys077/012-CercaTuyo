import Label from "../Label/Label";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "date";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  icon?: React.ReactNode;
  onIconClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  subtext?: string;    
  tooltip?: string;   
}

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "Escribe aquí...",
  icon,
  onIconClick,
  disabled,
  required,
  maxLength,
  minLength,
  subtext,
  tooltip,
}: InputFieldProps) => {
  return (
    <div className={styles.InputFieldContainer}>
      {/*Si hay un label, mostrámelo, con estilo, y vinculado al input por el name. = {condicion && contenido_a_mostrar} si es true, se muestra el contenido y si es false, no se muestra nada */}
      {label && 
        <Label 
          htmlFor={name} 
          required={required}
          tooltip={tooltip}
        >
          {label}
        </Label>} 

      <div className={styles.inputWrapper}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.input} ${icon ? styles.withIcon : ""}`}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
        />
        {icon && (
          <div className={styles.iconWrapper} onClick={onIconClick}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
