// 创建一个简单的 256x256 PNG 图标
const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

const size = 256;
const png = new PNG({ width: size, height: size });

// 创建渐变背景 (橙色到琥珀色 - 匹配应用主题)
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const idx = (size * y + x) << 2;
    
    // 计算到中心的距离用于圆形
    const cx = size / 2;
    const cy = size / 2;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = size / 2 - 10;
    
    if (dist <= radius) {
      // 圆形内部 - 渐变色 (橙色系)
      const t = y / size;
      png.data[idx] = Math.round(249 - t * 30);     // R: 249 -> 219
      png.data[idx + 1] = Math.round(115 - t * 20); // G: 115 -> 95
      png.data[idx + 2] = Math.round(22 + t * 10);  // B: 22 -> 32
      png.data[idx + 3] = 255; // Alpha
      
      // 添加简单的 "S" 字母效果 (SmartPrep 的 S)
      const letterCx = cx;
      const letterCy = cy;
      const letterDist = Math.sqrt((x - letterCx) ** 2 + (y - letterCy) ** 2);
      
      // 简单的圆环作为装饰
      if (letterDist > radius * 0.3 && letterDist < radius * 0.5) {
        const angle = Math.atan2(y - cy, x - cx);
        // 创建 "S" 形状的部分
        if ((angle > -Math.PI * 0.75 && angle < Math.PI * 0.25) || 
            (angle > Math.PI * 0.5 && angle < Math.PI)) {
          png.data[idx] = 255;
          png.data[idx + 1] = 255;
          png.data[idx + 2] = 255;
        }
      }
    } else {
      // 圆形外部 - 透明
      png.data[idx] = 0;
      png.data[idx + 1] = 0;
      png.data[idx + 2] = 0;
      png.data[idx + 3] = 0;
    }
  }
}

// 保存 PNG 文件
const buffer = PNG.sync.write(png);
const iconPath = path.join(__dirname, 'icons', 'icon.png');
fs.writeFileSync(iconPath, buffer);

console.log('✓ 图标已创建:', iconPath);
console.log('  尺寸: 256x256 像素');
