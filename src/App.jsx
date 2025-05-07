import './App.css'
import Button from './assets/components/Button/Button.jsx'

function App() {
  return (
    <div>
      <h1>Probando Botón Primario/Vendedor</h1>

      <Button
        variant="secondary" 
        section="common" 
        size="section" 
        fullWidth={false} 
        disabled={false} 
        type="button"
        onClick={() => alert("Botón 2dary Vendedor")}
        >
        Cancel
      </Button>
      <Button
        variant="primary" 
        section="common" 
        size="section" 
        fullWidth={false} 
        disabled={false} 
        type="button"
        onClick={() => alert("Botón Primario Vendedor")}
        >
        Confirmar
      </Button>
    </div>
  );
}

export default App;