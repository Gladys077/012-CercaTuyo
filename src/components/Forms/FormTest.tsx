import { useState } from "react";
import SelectFieldWithAdd from "@/components/Forms/SelectFields/SelectFieldWithAdd";
import InputField from "@/components/Forms/InputField/InputField";
import TextareaField from "@/components/Forms/TextareaField/TextareaField";
import SelectField from "./SelectFields/SelectField";

function FormDemo() {
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rubro, setRubro] = useState("");
  const [rubros, setRubros] = useState([
    { label: "Tecnología", value: "tecnologia" },
    { label: "Salud", value: "salud" },
  ]);

  const handleAddRubro = (nuevo: { label: string; value: string }) => {
    const exists = rubros.some((r) => r.value === nuevo.value);
    if (!exists) {
      setRubros((prev) => [...prev, nuevo]);
      setRubro(nuevo.value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nDescripción: ${descripcion}\nRubro: ${rubro}`);
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 480, margin: "auto" }}>
      <h2>Formulario de prueba</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Correo electrónico"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="ejemplo@correo.com"
        />

        <TextareaField
          label="Descripción"
          name="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          subtext="Contanos más sobre vos"
          
        />

        <SelectFieldWithAdd
          label="Select con opción de agregar nuevo rubro"
          name="rubro"
          value={rubro}
          onChange={(e) => setRubro(e.target.value)}
          options={rubros}
          onAddOption={handleAddRubro}
          placeholder="Seleccioná o agregá un rubro"
        />

        <SelectField
          label="Select"
          name="rubro"
          value={rubro}
          onChange={(e) => setRubro(e.target.value)}
          options={rubros}
          placeholder="Seleccioná un rubro"
        />

        <button type="submit" style={{ marginTop: 20 }}>
          Enviar
        </button>
      </form>
    </main>
  );
}

export default FormDemo;
