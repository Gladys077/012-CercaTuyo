import { useRef, useState } from "react";
import { ComponentType, SVGProps } from "react";
import styles from "./PerfilEdit.module.css";

interface PerfilEditProps {
  avatarSrc?: string;               // Imagen del usuario, viene desde la BBDD
  avatarFallbackIcon: ComponentType<SVGProps<SVGSVGElement>>; // Icono por defecto (cuando no hay imagen)
  editIcon: ComponentType<SVGProps<SVGSVGElement>>; // Ícono del botón de editar
  onAvatarChange?: (file: File) => void;    //para cuando el usuario sube una nueva imagen
  onAvatarRemove?: () => void;      // Para borrar la imagen actual
}

const PerfilEdit = ({
  avatarSrc,
  avatarFallbackIcon: AvatarDefault, //AvatarDefault es el nombre del icono
  editIcon: EditIcon,
  onAvatarChange,
  onAvatarRemove,
}: PerfilEditProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);     // Referencia al input "escondido" para subir archivos
  const [preview, setPreview] = useState<string | undefined>(undefined);    // Imagen temporal para mostrar preview

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

    // Maneja el archivo que el usuario sube
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);   // Crea una URL temporal para mostrar la imagen
      setPreview(imageUrl);     // Muestra la preview
      onAvatarChange?.(file);   // Informa al backend o padre que hay una nueva imagen
    }
  };

  // Si el usuario decide eliminar su imagen
  const handleRemove = () => {
    setPreview(undefined);  //Borra la preview
    onAvatarRemove?.();     //Avisa al backend para borrar la img
  };

  const hayImagen = preview || avatarSrc; //determina si hay algo para mostrar (img previa o avatar)

  return (
    <div className={styles.container}>
      <div className={styles.avatarWrapper}> 

        {/* Muestra la imagen de preview si existe, si no la original, y si no el ícono default */}
        {preview ? (
          <img src={preview} alt="Nuevo avatar" className={styles.avatar} />
        ) : avatarSrc ? (
          <img src={avatarSrc} alt="Avatar del usuario" className={styles.avatar} />
        ) : (
          <AvatarDefault className={styles.avatarIcon} />
        )}

        {/* Botón de editar (icono flotante) */}
        <button
          className={styles.editButton}
          onClick={handleEditClick}
          aria-label="Editar imagen de perfil"
        >
          <EditIcon className={styles.editIcon} />
        </button>
      </div>

      {/* Botón de "Quitar foto", solo aparece si hay algo cargado */}
      {hayImagen && (
        <button
          className={styles.removeButton}
          onClick={handleRemove}
          type="button"
        >
          Quitar foto
        </button>
      )}

      {/* Input escondido que se dispara al hacer clic en el botón de editar */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PerfilEdit;


//MODO DE USO:
/*
import { AvatarDefault, EditarBlanco } from "@/assets/icons";

<PerfilEdit
  avatarSrc={usuario.foto}
  avatarFallbackIcon={AvatarDefault}
  editIcon={EditarBlanco}
  onAvatarChange={(file) => {
    // subir imagen al backend
  }}
  onAvatarRemove={() => {
    // eliminar imagen del backend
  }}
/>
*/
