import { ChangeEvent } from "react";
import styles from "./SelectFields.module.css";
import Label from "../Label/Label";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
  subtext?: string;
}

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Seleccione una opción...",
  required = false,
  tooltip,
  subtext,
}: SelectFieldProps) => {
  return (
    <div className={styles.selectWrapper}>
      <Label
        htmlFor={name}
        required={required}
        tooltip={tooltip}
        subtext={subtext}
      >
        {label}
      </Label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.select}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;