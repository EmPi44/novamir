const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1584,
    height: 396,
    deviceScaleFactor: 2,
  });

  const htmlPath = path.resolve(__dirname, 'linkedin-banner.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.evaluate(() => document.fonts.ready);

  await page.screenshot({
    path: path.resolve(__dirname, 'linkedin-banner.png'),
    type: 'png',
    clip: { x: 0, y: 0, width: 1584, height: 396 },
    omitBackground: false,
  });

  console.log('Banner saved to linkedin-banner.png (3168x792 retina)');
  await browser.close();
})();
