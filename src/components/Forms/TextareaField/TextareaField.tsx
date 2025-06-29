import Label from "../Label/Label";
import styles from "./TextareaField.module.css";

interface TextareaFieldProps {
  label?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  tooltip?: string;
  subtext?: string;
}

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Escribe aquí...",
  disabled,
  required,
  maxLength,
  minLength,
  tooltip,
  subtext,
}: TextareaFieldProps) => {
  return (
    <div className={styles.TextareaFieldContainer}>
      {label && (
        <Label
          htmlFor={name}
          required={required}
          tooltip={tooltip}
          subtext={subtext}
        >
          {label}
        </Label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.textarea}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};

export default TextareaField;
