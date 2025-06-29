import React from "react";
import { EnviarBlanco } from "@/assets/icons";
import styles from "./ButtonDemo.module.css"; // opcional, para grid bonito
import Button from "../Button/Button";

const variants = ["primary", "secondary", "google"] as const;
const sections = ["common", "buyer", "seller"] as const;
const heights = ["form", "section"] as const;
const fullWidths = [false, true];
const iconPositions = ["left", "right"] as const;

const ButtonDemo = () => {
  return (
    <div className={styles.container}>
      <h2>👉 Secondary + Primary (orden correcto)</h2>
      <div className={styles.buttonRow}>
        <Button
          variant="secondary"
          section="seller"
          height="form"
          fullWidth={false}
          onClick={() => console.log("Cancelar")}
        >
          Cancelar
        </Button>
        <Button
          variant="primary"
          section="seller"
          height="form"
          fullWidth={false}
          onClick={() => console.log("Confirmar")}
        >
          Confirmar
        </Button>
      </div>

      <h2>👉 Todas las combinaciones</h2>
      <div className={styles.grid}>
      {sections.map((section) =>
        heights.map((height) =>
          iconPositions.map((iconPosition) => {
            // fullWidth = false → agrupamos en fila: [secondary][primary]
            return (
              <div className={styles.buttonRow} key={`row-${section}-${height}-${iconPosition}`}>
                <Button
                  variant="secondary"
                  section={section}
                  height={height}
                  fullWidth={false}
                  icon={EnviarBlanco}
                  iconPosition={iconPosition}
                  onClick={() => console.log("Cancelar")}
                >
                  Cancelar
                </Button>

                <Button
                  variant="primary"
                  section={section}
                  height={height}
                  fullWidth={false}
                  icon={EnviarBlanco}
                  iconPosition={iconPosition}
                  onClick={() => console.log("Confirmar")}
                >
                  Confirmar
                </Button>
              </div>
            );
          })
        )
      )}


        {/* Ejemplo deshabilitado */}
        <div>
          <Button variant="primary" section="buyer" disabled>
            Disabled
          </Button>
        </div>

        {/* Ejemplo sin ícono */}
        <div>
          <Button variant="secondary" section="seller">
            Sin Icono
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
