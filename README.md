# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

---

> .

---

---

# 🧩 Guía para usar íconos SVG como Componentes

Esta guía explica cómo configurar correctamente un proyecto para importar íconos `.svg` como componentes React, con soporte para TypeScript, colores dinámicos, y un sistema automático para generar un `index.ts` que facilita la importación de múltiples íconos.

---

## ✅ ¿Qué vas a lograr?

- Importar íconos SVG como componentes React con `?react`
- Usar `fill`, `stroke` y estilos dinámicos
- Autogenerar un archivo `index.ts` con todos los íconos listos para usar
- Soporte completo para TypeScript sin errores de tipo

---

## 🛠 Paso a paso de configuración

### 1. Instalación del plugin SVGR

Asegurate de tener instalado:

```bash
npm i vite-plugin-svgr
```

> Verificá la instalación con:

```bash
npm ls vite-plugin-svgr
```

Deberías ver algo como: `vite-plugin-svgr@4.3.0`

---

### 2. `vite.config.js`

Configurá tu archivo así:

```ts
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

### 3. Archivo de tipos para TypeScript

Creá el archivo `src/types/svg.d.ts`:

```ts
/// <reference types="vite/client" />

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
```

---

### 4. Script para generar `index.ts` con todos los íconos automáticamente

📁 Creá el archivo: `src/scripts/generar-index-icons.ts`

```ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, "..", "src", "assets", "icons");
const typesDir = path.join(__dirname, "..", "src", "types");

// Leer archivos SVG
const files = fs.readdirSync(iconsDir).filter((file) => file.endsWith(".svg"));

if (files.length === 0) {
  console.log("⚠️ No se encontraron SVGs.");
  process.exit(1);
}

// Generar index.ts en src/assets/icons
const indexLines = files.map((file) => {
  const name = path.basename(file, ".svg");
  return `export { default as ${name} } from "./${file}?react";`;
});
const indexPath = path.join(iconsDir, "index.ts");
fs.writeFileSync(indexPath, indexLines.join("\n") + "\n");
console.log(`✅ ¡Listo! Se generó index.ts con ${files.length} íconos.`);

// Crear carpeta src/types si no existe
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir);
}

// Generar iconModules.d.ts en src/types
const dtsLines = [
  'declare module "@/assets/icons" {',
  '  import * as React from "react";',
  "",
  ...files.map((file) => {
    const name = path.basename(file, ".svg");
    return `  export const ${name}: React.FC<React.SVGProps<SVGSVGElement>>;`;
  }),
  "}",
  "",
];
const dtsPath = path.join(typesDir, "iconModules.d.ts");
fs.writeFileSync(dtsPath, dtsLines.join("\n"));
console.log(
  `✅ ¡Listo! Se generó iconModules.d.ts con ${files.length} declaraciones de tipos.`
);
```

---

### 5. Agregar script en `package.json`

```json
"type": "module"


"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "generar:icons": "node --loader ts-node/esm --no-warnings scripts/generar-index-icons.ts"
  },
```

> ⚠️ Este script requiere tener instalado `ts-node`  
> Instalalo con:

```bash
npm install -D ts-node typescript @types/node
```

### 6. En el root debe agregar el archivo 'tsconfig.scripts.json'

```bash
{
  "compilerOptions": {
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "allowImportingTsExtensions": true
  },
  "include": ["scripts"]
}

```

### 6.b.'tsconfig.json'

```bash
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "types": ["node", "vite/client", "react"],
    "baseUrl": "./src",
    "paths": { "@/*": ["./*"] },
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src", "src/types", "src/types/svg.d.ts"]
}

```

### 7. Para generar el index.ts que enlista los iconos, corré:

```bash
npm run generar:icons
```

.

## 🧪 Cómo usar los íconos en tu proyecto

📦 Una vez generaste el archivo `src/assets/icons/index.ts`, podés usar los íconos así:

```tsx
import { Perfil, Cerrar, Monedas } from "@/assets/icons";

<Perfil style={{ width: 24, height: 24, fill: "#f00" }} />
<Cerrar style={{ width: 20, height: 20, stroke: "#333" }} />
```

🎨 También podés usar clases Tailwind o CSS Modules:

```tsx
<Perfil className="w-6 h-6 fill-blue-500" />
```

---

---

## ✅ Checklist final para que todo funcione

- ✅ Instalar `vite-plugin-svgr`
- ✅ Configurar `vite.config.js` con `svgrOptions: { icon: true }`
- ✅ Tener bien configurados -en el root- los archivos:
  `tsconfig.json` y `tsconfig.scripts.json`
- ✅ Definir tipos en `svg.d.ts`
- ✅ Tener un script para generar automáticamente `index.ts`
- ✅ Usar `ts-node` para ejecutar ese script

---

## 🧠 ¿Qué ganás con esto?

- Estandarización
- Importaciones limpias y consistentes
- Soporte para colores dinámicos
- Menos errores de tipado
- Un `index.ts` siempre actualizado con un solo comando:

```bash
npm run generar:icons
```

---

### **RECORDAR: Cada vez que se haga una modificación dentro de la carpeta iconos, hay que correr: npm run generar:icons.**
