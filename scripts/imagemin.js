import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'assets/images';
const distDir = 'dist/assets/images';

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

async function optimizeImage(file) {
  const inputPath = path.join(srcDir, file);
  const outputPath = path.join(distDir, file);
  const ext = path.extname(file).toLowerCase();

  const image = sharp(inputPath);

  if (ext === '.jpg' || ext === '.jpeg') {
    await image.jpeg({ quality: 75 }).toFile(outputPath);
  } else if (ext === '.png') {
    await image.png({ compressionLevel: 8 }).toFile(outputPath);
  } else {
    fs.copyFileSync(inputPath, outputPath); // ignora outros formatos
  }
}

async function optimizeAll() {
  const files = fs.readdirSync(srcDir);
  let count = 0;

  console.log('🚀 Otimizando imagens...');

  for (const file of files) {
    if (!/\.(png|jpg|jpeg)$/i.test(file)) continue;
    await optimizeImage(file);
    count++;
  }

  console.log(`✅ ${count} imagens otimizadas com sucesso!`);
}

optimizeAll().catch((err) => {
  console.error('❌ Erro ao otimizar imagens:', err);
  process.exit(1);
});
