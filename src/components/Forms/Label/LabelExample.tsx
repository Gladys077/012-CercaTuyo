//EJEMPLOS DE USO:
import { Info } from "@/assets/icons";
import Label from "./Label";

const LabelExamples = () => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Ejemplos de uso del componente Label</h2>

      {/* Ejemplo básico con texto simple */}
      <Label htmlFor="nombre">Nombre completo</Label>

      {/* Ejemplo con campo obligatorio */}
      <Label htmlFor="email" required>
        Correo electrónico
      </Label>

      {/* Ejemplo con subtext */}
      <Label htmlFor="telefono" subtext="Incluí el código de área">
        Teléfono
      </Label>

      {/* Ejemplo con tooltip */}
      <Label htmlFor="password" tooltip="Tu contraseña debe tener al menos 8 caracteres">
        Contraseña
      </Label>

      {/* Ejemplo con ícono */}
      <Label htmlFor="info" icon={<Info width={16} height={16} />}>
        Información adicional
      </Label>

      {/* Ejemplo con varias props combinadas */}
      <Label
        htmlFor="usuario"
        required
        tooltip="El nombre de usuario debe ser único"
        subtext="Sin espacios ni caracteres especiales"
        icon={<Info width={16} height={16} />}
      >
        Usuario
      </Label>

      {/* Ejemplo con children complejo */}
      <Label htmlFor="descripcion" required>
        Descripción <strong>(máximo 200 caracteres)</strong>
      </Label>
    </div>
  );
};

export default LabelExamples;
