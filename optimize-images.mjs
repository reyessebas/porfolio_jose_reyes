import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  const files = getAllFiles(publicDir);
  
  for (const file of files) {
    if (/\.(png|jpg|jpeg)$/i.test(file)) {
      try {
        const ext = path.extname(file).toLowerCase();
        const fileName = path.basename(file);
        const fileSize = fs.statSync(file).size;
        const fileSizeMB = (fileSize / 1024 / 1024).toFixed(2);
        
        if (ext === '.png') {
          await sharp(file)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(file + '.tmp');
        } else {
          await sharp(file)
            .jpeg({ quality: 85, progressive: true })
            .toFile(file + '.tmp');
        }
        
        const newSize = fs.statSync(file + '.tmp').size;
        const newSizeMB = (newSize / 1024 / 1024).toFixed(2);
        const reduction = ((1 - newSize / fileSize) * 100).toFixed(1);
        
        fs.renameSync(file + '.tmp', file);
        console.log(`✅ ${fileName}: ${fileSizeMB}MB → ${newSizeMB}MB (${reduction}% menor)`);
      } catch (err) {
        console.error(`❌ Error optimizando ${file}:`, err.message);
      }
    }
  }
}

function getAllFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  
  return results;
}

optimizeImages().then(() => {
  console.log('\n✨ Optimización completada');
}).catch(err => {
  console.error('Error:', err);
});
