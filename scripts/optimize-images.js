import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');

const images = [
  { src: 'elemento_one.png', maxWidth: 1200 },
  { src: 'a.jpg', maxWidth: 1920 },
  { src: 'b.jpg', maxWidth: 1920 },
  { src: 'c.jpg', maxWidth: 1920 },
  { src: 'logo.png', maxWidth: 200 },
  { src: 'carru_two.png', maxWidth: 800 },
  { src: 'carru_three.png', maxWidth: 800 },
  { src: 'carru_four.png', maxWidth: 600 },
  { src: 'carru_five.png', maxWidth: 800 },
  { src: 'carru_seven.png', maxWidth: 600 },
  { src: 'carru_eight.png', maxWidth: 600 },
  { src: 'carru_nine.png', maxWidth: 600 },
  { src: 'carru_TEN.png', maxWidth: 1200 },
];

const optimizeImage = async (imagePath, maxWidth) => {
  const fullPath = path.join(publicDir, imagePath);
  const name = path.parse(imagePath).name;
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Archivo no encontrado: ${fullPath}`);
    return;
  }

  try {
    const image = sharp(fullPath);
    const metadata = await image.metadata();
    
    console.log(`📦 Optimizando: ${imagePath}`);
    console.log(`   Dimensiones originales: ${metadata.width}x${metadata.height}`);

    // WebP versión
    await sharp(fullPath)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(publicDir, `${name}.webp`));

    // AVIF versión (mejor compresión)
    await sharp(fullPath)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .avif({ quality: 75 })
      .toFile(path.join(publicDir, `${name}.avif`));

    // Comprimir original
    if (imagePath.endsWith('.png')) {
      await sharp(fullPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9, quality: 90 })
        .toFile(`${fullPath}.tmp`);
    } else {
      await sharp(fullPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(`${fullPath}.tmp`);
    }

    fs.renameSync(`${fullPath}.tmp`, fullPath);
    
    const optimizedMetadata = await sharp(fullPath).metadata();
    console.log(`✅ Optimizado: ${optimizedMetadata.width}x${optimizedMetadata.height}\n`);
  } catch (error) {
    console.error(`❌ Error optimizando ${imagePath}:`, error.message);
  }
};

const main = async () => {
  console.log('🖼️  Iniciando optimización de imágenes...\n');
  console.log(`Directorio: ${publicDir}\n`);
  
  for (const img of images) {
    await optimizeImage(img.src, img.maxWidth);
  }
  
  console.log('✨ Optimización completada');
};

main();
