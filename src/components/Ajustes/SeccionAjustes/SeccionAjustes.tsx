import styles from "./SeccionAjustes.module.css";

interface SeccionAjustesProps {
  titulo: string;
  children: React.ReactNode; //son los ItemsAjustes y puede haber uno o varios
}

const SeccionAjustes = ({ 
    titulo, 
    children 
}: SeccionAjustesProps) => {
  
  return (
    <section className={styles.wrapper} aria-label={`Sección ${titulo}`}>
      <h4 className={styles.titulo}>{titulo}</h4>
      <div className={styles.items}>{children}</div>
    </section>
  );
};

export default SeccionAjustes;


/*Arma una sección de ajustes, reutilizando los componentes SubtitulosAjustes e ItemsAjustes (los items son los children de SeccionAjustes y su cant. puede variar)
MODO DE USO:

<SeccionAjustes titulo="Cuenta">
  <ItemsAjustes icon={Perfil} texto="Perfil" onClick={() => navigate("/perfil")} />
  <ItemsAjustes icon={Contraseña} texto="Cambiar contraseña" onClick={abrirModalContraseña} />
</SeccionAjustes>

<SeccionAjustes titulo="Créditos">
  <ItemsAjustes icon={Monedas} texto="Cargar créditos" onClick={abrirCarga} />
</SeccionAjustes>

*/