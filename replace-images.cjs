const fs = require('fs');

let count = 1;
function getNextImage() {
  const num = String(count).padStart(2, '0');
  count++;
  if (count > 30) count = 1;
  return `/landscape/gym_${num}.jpg`;
}

// 1. Update data.ts
let dataContent = fs.readFileSync('src/utils/data.ts', 'utf8');
dataContent = dataContent.replace(/imgSrc:\s*['"][^'"]+['"]/g, () => `imgSrc: '${getNextImage()}'`);
dataContent = dataContent.replace(/avatar:\s*['"][^'"]+['"]/g, () => `avatar: '${getNextImage()}'`);
dataContent = dataContent.replace(/thumbnail:\s*['"][^'"]+['"]/g, () => `thumbnail: '${getNextImage()}'`);
fs.writeFileSync('src/utils/data.ts', dataContent);

// 2. Update components
const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = dir + '/' + file;
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const components = walkSync('src/components');
components.forEach(file => {
  if (file.endsWith('.tsx')) {
    let c = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // Replace <img src="..." />
    const regex = /<img[^>]+src=['"]([^'"]+)['"]/g;
    c = c.replace(regex, (match, p1) => {
      // Don't replace external URLs or footer icons if you don't want to
      if (p1.includes('mixkit') || p1.includes('closed.svg')) return match;
      changed = true;
      return match.replace(p1, getNextImage());
    });
    
    // Specifically catch bg-[url('/images/closed.svg')] ? No, leave icons alone.
    if (changed) {
      fs.writeFileSync(file, c);
    }
  }
});
console.log('Images replaced successfully!');
