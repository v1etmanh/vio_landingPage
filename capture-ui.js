import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('Khởi động trình duyệt...');
  // Launch the browser
  const browser = await puppeteer.launch({ 
    headless: "new",
    defaultViewport: null,
    args: ['--window-size=1920,1080']
  });
  
  const page = await browser.newPage();
  
  // Set the viewport size for desktop layout
  await page.setViewport({ width: 1920, height: 1080 });
  
  const url = 'http://localhost:5173'; // Default Vite port
  console.log(`Đang tải trang web: ${url}`);
  
  try {
    // Wait until network is mostly idle to ensure fonts/images are loaded
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (error) {
    console.error(`Không thể kết nối đến ${url}. Hãy chắc chắn rằng bạn đã chạy 'npm run dev'.`);
    console.error(error);
    await browser.close();
    process.exit(1);
  }

  // Define the target save directory
  const saveDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\f21d01e0-afa6-47d1-9605-d985ad257162\\scratch\\screenshots';
  
  if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir, { recursive: true });
  }
  
  // Create a unique filename
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = path.join(saveDir, `ui-screenshot-${timestamp}.png`);
  
  console.log('Đang chụp ảnh toàn bộ trang...');
  
  // Wait a bit extra for any CSS animations to finish
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Capture the full page screenshot
  await page.screenshot({ path: filePath, fullPage: true });
  
  console.log(`✅ Thành công! Ảnh chụp màn hình đã được lưu tại:\n👉 ${filePath}`);
  
  await browser.close();
})();
