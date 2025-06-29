import { useState } from "react";
import { Perfil, EditarBlanco } from "@/assets/icons";
import PerfilEdit from "./PerfilEdit";

// Simulamos un "usuario" con imagen cargada (avatarSrc)
const PerfilDemo = () => {
  const [imagen, setImagen] = useState<string | undefined>(undefined);

  const handleAvatarChange = (file: File) => {
    const urlTemporal = URL.createObjectURL(file);
    setImagen(urlTemporal);
    // Acá podrías hacer: subir al backend, mostrar loading, etc.
  };

  const handleAvatarRemove = () => {
    setImagen(undefined);
    // También: eliminar del backend, mostrar mensaje, etc.
  };

  return (
    <div style={{ padding: "24px", display: "flex", justifyContent: "center" }}>
      <PerfilEdit
        avatarSrc={imagen} // Podés simular un string con URL para testear
        avatarFallbackIcon={Perfil}
        editIcon={EditarBlanco}
        onAvatarChange={handleAvatarChange}
        onAvatarRemove={handleAvatarRemove}
      />
    </div>
  );
};

export default PerfilDemo;
