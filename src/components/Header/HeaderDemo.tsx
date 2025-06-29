import Header from "./Header";
import styles from "./Header.module.css"; // usar tus clases existentes
import { Volver, CarritoAzul, TiendaNaranja, Monedas } from "@/assets/icons";

const HeaderDemo = () => {
  return (
    <div className={styles.demoContainer}>
      {/* Common - Gris oscuro en ícono y texto */}
      <Header
        leftIcon={<Volver width={24} aria-label="Volver" />}
        title="Registro"
        colorScheme="comun"
      />

      {/* Comprador a) - Carrito azul + texto */}
      <Header
        leftIcon={<CarritoAzul width={24} aria-label="Nuevo Pedido" />}
        title="Nuevo Pedido"
        colorScheme="comprador"
      />

      {/* Comprador b) - Volver azul + texto */}
      <Header
        leftIcon={<Volver width={24} aria-label="Volver" />}
        title="Estado del Pedido"
        colorScheme="comprador"
      />

      {/* Vendedor - Tienda + texto + monedas + número */}
      <Header
        leftIcon={<TiendaNaranja width={24} aria-label="Tienda" />}
        title="Mi Tienda"
        rightContent={
          <>
            <span className={styles.vendedorIcon}>
              <Monedas width={20} aria-label="Créditos" />
            </span>
            <span>2500</span>
          </>
        }
        colorScheme="vendedor"
      />
    </div>
  );
};

export default HeaderDemo;
