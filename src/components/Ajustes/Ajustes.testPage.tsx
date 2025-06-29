// AjustesPreview.tsx
import { useNavigate } from "react-router-dom"; // Si usás React Router
import ItemsAjustes from "./ItemsAjustes/ItemsAjustes";
import SeccionAjustes from "./SeccionAjustes/SeccionAjustes";


import { Perfil, Monedas, Salir, Version } from "@/assets/icons";

const AjustesPreview = () => {
  const navigate = useNavigate();

  const handleCreditos = () => alert("Ir a cargar créditos");
  const cerrarSesion = () => alert("Sesión cerrada");

  return (
    <div style={{ padding: "16px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px" }}>Vista previa: Ajustes</h1>

      <SeccionAjustes titulo="Cuenta">
        <ItemsAjustes 
          icon={Perfil} 
          texto="Perfil" 
          onClick={() => navigate("/perfil")} 
        />
        <ItemsAjustes
          icon={Monedas}
          texto="Cargar créditos"
          textoSecundario="(Recibís $5000 de regalo)"
          // iconStyle={{ color: "#EA580C", fill: "currentColor", stroke: "none" }} //para que sea fill y orange

          onClick={handleCreditos}
        />
        <ItemsAjustes 
          icon={Salir} 
          texto="Cerrar sesión" 
          onClick={cerrarSesion} 
        />
      </SeccionAjustes>

      <SeccionAjustes titulo="App">
        <ItemsAjustes 
          icon={Version} 
          texto="Versión de la app: 1.0.3" 
          deshabilitado 
        />
      </SeccionAjustes>

     
    </div>
  );
};

export default AjustesPreview;
