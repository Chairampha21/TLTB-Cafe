const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const dataPath = path.join(srcDir, 'data', 'menuData.js');
const mapperPath = path.join(srcDir, 'utils', 'imageMapper.js');

function toCjs(src) {
  // naive transform: replace "export default" and "export function" and "export const"
  return src
    .replace(/export default /g, 'module.exports.default = ')
    .replace(/export function (\w+)\s*\(/g, 'module.exports.$1 = function (')
    .replace(/export const (\w+)\s*=\s*/g, 'module.exports.$1 = ')
    .replace(/export \{\s*default\s*\}/g, '');
}

function loadCjsFromSource(srcFile) {
  const src = fs.readFileSync(srcFile, 'utf8');
  const cjs = toCjs(src);
  const tmp = path.join(__dirname, 'tmp_' + path.basename(srcFile) + '.cjs');
  fs.writeFileSync(tmp, cjs, 'utf8');
  const required = require(tmp);
  // cleanup tmp
  fs.unlinkSync(tmp);
  return required;
}

try {
  const menuModule = loadCjsFromSource(dataPath);
  const mapperModule = loadCjsFromSource(mapperPath);

  const menuItems = menuModule.menuItems || menuModule.default || menuModule;
  const imageMap = mapperModule.default || mapperModule.imageMap || mapperModule;
  const getImageForItem = mapperModule.getImageForItem || mapperModule.getImagePathByName || null;

  if (!Array.isArray(menuItems)) {
    console.error('menuItems is not an array');
    process.exit(1);
  }

  const drinks = [];
  const desserts = [];
  const foods = [];
  const missing = [];

  for (const it of menuItems) {
    const item = Object.assign({}, it);
    // try helpers: prefer explicit image, then mapper getImageForItem if available, then getImagePathByName
    let img = (item.image || '').trim();
    if (!img && typeof getImageForItem === 'function') {
      try {
        img = mapperModule.getImageForItem ? mapperModule.getImageForItem(item) : (mapperModule.getImagePathByName ? mapperModule.getImagePathByName(item.name) : '');
      } catch (e) {
        // ignore
      }
    }
    if (!img) img = '';
    item.image = img;

    switch ((item.section || '').toLowerCase()) {
      case 'drink':
        drinks.push(item);
        break;
      case 'dessert':
        desserts.push(item);
        break;
      case 'food':
        foods.push(item);
        break;
      default:
        // try to infer from category name tokens
        const c = (item.category || '').toLowerCase();
        if (c.includes('โทสต์') || c.includes('ปัง') || item.subCategory === 'โทสต์' || item.subCategory === 'ปังเย็น' || item.subCategory === 'ขนมปังปิ้ง') {
          desserts.push(item);
        } else if (c.includes('กาแฟ') || c.includes('ชา') || c.includes('โซดา') || item.subCategory) {
          drinks.push(item);
        } else if (c.includes('อาหาร') || c.includes('ข้าว') || c.includes('มาม่า') || c.includes('ของทานเล่น')) {
          foods.push(item);
        } else {
          // default to drinks
          drinks.push(item);
        }
    }

    if (!item.image) missing.push({ id: item.id, name: item.name || item.title || '(no name)', section: item.section });
  }

  const outDir = path.join(srcDir, 'data');
  fs.writeFileSync(path.join(outDir, 'drinks.json'), JSON.stringify(drinks, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'desserts.json'), JSON.stringify(desserts, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'foods.json'), JSON.stringify(foods, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'missing_images_report.json'), JSON.stringify(missing, null, 2), 'utf8');

  console.log('Wrote drinks.json, desserts.json, foods.json and missing_images_report.json');
} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
