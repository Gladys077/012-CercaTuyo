import { useState, ChangeEvent } from "react";
import styles from "./SelectFields.module.css";
import Label from "../Label/Label";


interface Option {
  label: string;
  value: string;
}

interface SelectFieldWithAddProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  onAddOption: (newOption: Option) => void;
  required?: boolean;
  tooltip?: string;
  subtext?: string;
}

const SelectFieldWithAdd = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Seleccione una opción...",
  onAddOption,
  required = false,
  tooltip,
  subtext,
}: SelectFieldWithAddProps) => {
  const [newOption, setNewOption] = useState("");

  const handleAddOption = () => {
    const trimmed = newOption.trim(); // elimina espacios al inicio y final
    if (!trimmed) return;

    const exists = options.some(
      (op) => op.value.toLowerCase() === trimmed.toLowerCase()
    );
    if (!exists) {
      const nuevo = { label: trimmed, value: trimmed };
      onAddOption(nuevo);
    }

    setNewOption("");
  };

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

      <div className={styles.addWrapper}>
        <input
          type="text"
          placeholder="Agregar nuevo"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          className={styles.addInput}
        />
        <button
          type="button"
          className={styles.addButton}
          onClick={handleAddOption}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SelectFieldWithAdd;
