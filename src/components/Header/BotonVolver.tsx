import { useNavigate } from "react-router-dom";
import { Volver } from "@/assets/icons";
import styles from "./BotonVolver.module.css";

const BotonVolver = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={styles.wrapper}
      role="button" //indica q se comporta como btn (útil en web, cuando posicionan el mouse y usan lector)
      tabIndex={0}  //permite enfocar el ícono con Tab (accesibilidad)
      aria-label="Volver atrás"
      onClick={handleBack}  //le da funcionaldiad para ir atrás
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleBack();
        }
      }}
    >
      <Volver width={24} height={24} aria-hidden="true" />
    </div>
  );
};

export default BotonVolver;
