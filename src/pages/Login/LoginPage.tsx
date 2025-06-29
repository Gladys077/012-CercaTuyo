import { useState } from "react";
import InputField from "@/components/Forms/InputField/InputField";
import TextareaField from "@/components/Forms/InputField/InputField";
import SelectField from "@/components/Forms/SelectFields/SelectFieldWithAdd"; 

function App() {
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rubro, setRubro] = useState("");

  const [rubros, setRubros] = useState([
    { label: "Almacén", value: "Almacén" },
    { label: "Carnicería", value: "Carnicería" },
  ]);

  const handleAddRubro = (nuevo: { label: string, value: string }) => {
    const exists = rubros.some((r) => r.value === nuevo.value); //Si ya hay uno con ese value, no hace nada (evita duplicados). chequea si existe y 
    if (!exists) {
      setRubros((prev) => [...prev, nuevo]);          // Si no existe, lo agrega al array rubros
      setRubro(nuevo.value);        //Y automáticamente selecciona ese nuevo rubro en el select (ver con LIO si dejaremos q ingresen cualquier rubro sin revisar previamente)
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nDescripción: ${descripcion}\nRubro: ${rubro}`);
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 480, margin: "auto" }}>
      <h2>Formulario de Prueba</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Correo electrónico"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@mail.com"
        />

        <TextareaField
          label="Descripción"
          name="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <SelectField
          label="Rubro"
          name="rubro"
          value={rubro}
          options={rubros}
          onChange={(e) => setRubro(e.target.value)}
          editable={true} // habilita agregar opciones nuevas
          placeholder="Seleccioná un rubro o escribí uno nuevo"
        />

        <button type="submit" style={{ marginTop: 20 }}>
          Enviar
        </button>
      </form>
    </main>
  );
}

export default App;
