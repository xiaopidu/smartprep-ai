const { pngToIco } = require('png-to-ico');
const fs = require('fs');
const path = require('path');

async function convertIcon() {
  try {
    const pngPath = path.join(__dirname, 'icons', 'icon.png');
    const icoPath = path.join(__dirname, 'icons', 'icon.ico');
    
    const buf = await pngToIco(pngPath);
    fs.writeFileSync(icoPath, buf);
    console.log('✓ ICO 图标创建成功:', icoPath);
  } catch (error) {
    console.error('转换失败:', error);
  }
}

convertIcon();
