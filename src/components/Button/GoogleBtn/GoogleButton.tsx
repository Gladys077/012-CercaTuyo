import  Button  from "../Button/Button";
import {GoogleLogoColor} from "@/assets/icons"; 

interface GoogleButtonProps {
  text?: string;
  onLogin: () => void;
}

export default function GoogleButton({ onLogin }: GoogleButtonProps) {
  return (
    <Button
      variant="google"
      section="common"
      fullWidth={true}
      icon={GoogleLogoColor}
      iconPosition="left"
      onClick={onLogin}
    >
      Iniciar sesión con Google
    </Button>
  );
}

// Este componente es un botón que se usa para iniciar sesión con Google.
// Uso de base el componente Button (línea 6), al que le pasamos las props necesarias para que se vea como un botón de Google.

// Cuando lo usemos en la app, lo llamamos así:
{/* <GoogleButton onLogin={handleGoogleLogin} />
<GoogleButton text="Iniciar sesión con Google" onLogin={handleGoogleLogin} /> */}
