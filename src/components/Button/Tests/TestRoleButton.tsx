// TestRoleButton.tsx
import RoleButton from "../RoleButton/RoleButton";
import { ComponentType, SVGProps } from "react";
import {CarritoAzul, FlechaDerecha, TiendaNaranja} from "@/assets/icons";

const TestRoleButton = () => {
  const handleCompradorClick = () => {
    alert("Rol: Comprador seleccionado");
  };

  const handleVendedorClick = () => {
    alert("Rol: Vendedor seleccionado");
  };

  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Botón de Comprador */}
      <RoleButton
        icon={CarritoAzul}
        titulo="Comprador"
        subtitulo="Haz tu pedido y elige el mejor precio"
        flecha={FlechaDerecha}
        onClick={handleCompradorClick}
        variant="comprador"
      />

      {/* Botón de Vendedor */}
      <RoleButton
        icon={TiendaNaranja}
        titulo="Vendedor"
        subtitulo="Pasa presupuestos y vende ahora"
        flecha={FlechaDerecha}
        onClick={handleVendedorClick}
        variant="vendedor"
      />
    </div>
  );
};

export default TestRoleButton;
