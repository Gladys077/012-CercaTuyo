import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, "..", "src", "assets", "icons");
const typesDir = path.join(__dirname, "..", "src", "types");

// Leer archivos SVG
const files = fs.readdirSync(iconsDir).filter(file => file.endsWith(".svg"));

if (files.length === 0) {
  console.log("⚠️ No se encontraron SVGs.");
  process.exit(1);
}

// Generar index.ts en src/assets/icons
const indexLines = files.map(file => {
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
  '',
  ...files.map(file => {
    const name = path.basename(file, ".svg");
    return `  export const ${name}: React.FC<React.SVGProps<SVGSVGElement>>;`;
  }),
  '}',
  ''
];
const dtsPath = path.join(typesDir, "iconModules.d.ts");
fs.writeFileSync(dtsPath, dtsLines.join("\n"));
console.log(`✅ ¡Listo! Se generó iconModules.d.ts con ${files.length} declaraciones de tipos.`);
