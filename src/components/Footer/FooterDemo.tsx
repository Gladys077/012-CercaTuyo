import { useState } from "react";
import Footer from "./Footer";

const FooterDemo = () => {
  const [role, setRole] = useState<"comprador" | "vendedor">("comprador");

  return (
    <div>

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <button onClick={() => setRole("comprador")}>Ver como Comprador</button>
        <button onClick={() => setRole("vendedor")}>Ver como Vendedor</button>
      </div>

      <div style={{ height: "300px", background: "#f0f0f0", padding: "1rem" }}>
        <p>Contenido simulado de la app (espacio para no tapar con el footer)</p>
      </div>

      <Footer role={role} />
    </div>
  );
};

export default FooterDemo;
