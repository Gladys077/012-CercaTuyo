import styles from "./Header.module.css";

interface HeaderProps {
  leftIcon?: React.ReactNode;
  title?: string;
  rightContent?: React.ReactNode;
  colorScheme?: "comun" | "comprador" | "vendedor";
}

const Header = ({
  leftIcon = null,
  title = "",
  rightContent = null,
  colorScheme = "comun",
}: HeaderProps) => {
  return (
    <div className={styles.header} aria-label={`Encabezado de sección ${title}`}>
      <div className={styles.left}>
        {leftIcon && (
          <span
            className={`${styles.icon} ${styles[colorScheme + "Icon"] || ""}`}
          >
            {leftIcon}
          </span>
        )}
      </div>

      <div className={styles.title}>{title}</div>

      <div className={styles.right}>
        {rightContent && (
          <div className={styles.rightContent}>
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
