import Button from "../Button/Button.jsx";
import { GoogleLogo } from '@/assets/icons/GoogleLogo.svg' // Importamos el logo de Google

export default function GoogleButton({ onLogin }) {
  return (
    <Button         
      variant="google"
      section="common"
      fullWidth={true}
      icon={<img src={GoogleLogo} alt="Logo de Google" />}
      iconPosition="left"
      onClick={onLogin}
    >
      Google
    </Button>
  );
}


// Este componente es un botón que se usa para iniciar sesión con Google.
// Uso de base el componente Button (línea 6), al que le pasamos las props necesarias para que se vea como un botón de Google.

// Cuando lo usemos en la app, lo llamamos así:
// <GoogleButton onLogin={handleGoogleLogin} />