const fs = require('fs');
const path = require('path');

// Carpeta base donde están icons, img, emojis
const assetsBase = path.resolve(__dirname, './src/assets');

// Que carpetas voy a procesar
const folders = [
  { name: 'icons', extensions: ['.svg'] },
  { name: 'img', extensions: ['.gif', '.png', '.jpg', '.jpeg'] },
  { name: 'emojis', extensions: ['.svg', '.png'] },
];

// Función para generar exportaciones
const generateExports = (dirPath, extensions) => {
  const files = fs.readdirSync(dirPath).filter(file =>
    extensions.includes(path.extname(file))
  );

  return files.map(file => {
    const name = path.basename(file, path.extname(file));
    const pascalName = name
      .replace(/(^\w|[-_]\w)/g, clear => clear.replace(/[-_]/, '').toUpperCase());
    return `export { default as ${pascalName} } from './${file}';`;
  });
};

// Procesar cada carpeta
folders.forEach(folder => {
  const dirPath = path.join(assetsBase, folder.name);

  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️ La carpeta ${folder.name} no existe. Saltando.`);
    return;
  }

  const exports = generateExports(dirPath, folder.extensions);

  if (exports.length === 0) {
    console.log(`ℹ️ No se encontraron archivos en ${folder.name}.`);
    return;
  }

  const indexPath = path.join(dirPath, 'index.js');
  fs.writeFileSync(indexPath, exports.join('\n') + '\n', 'utf8');
  console.log(`✅ ${folder.name}/index.js actualizado con ${exports.length} archivos.`);
});
