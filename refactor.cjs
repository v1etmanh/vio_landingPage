const fs = require('fs');
const path = require('path');

const replaceInDir = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove imports
      content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"];?\r?\n/g, '');
      content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"];?\r?\n/g, '');
      content = content.replace(/['"]use client['"];?\r?\n/g, '');
      
      // Replace tags
      content = content.replace(/<Image/g, '<img');
      content = content.replace(/<\/Image>/g, '');
      content = content.replace(/<Link/g, '<a');
      content = content.replace(/<\/Link>/g, '</a>');
      
      // Remove 'fill' which is a boolean prop in Next.js Image
      content = content.replace(/\sfill(\s|>)/g, '$1');
      
      fs.writeFileSync(fullPath, content);
    }
  });
};

replaceInDir('src/components');
replaceInDir('src/utils');
console.log('Refactoring complete.');
