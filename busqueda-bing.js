const { chromium } = require('playwright');

(async () =>{
    const browser = await chromium.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.bing.com');
    await page.waitForTimeout(3000);
    await page.locator('[name="q"]').click();
    await page.waitForTimeout(1000);
    await page.keyboard.type('lugares donde comer en toluca centro', {delay:150});
    await page.waitForTimeout(1500);
    await page.keyboard.press('Enter');
    console.log('ya quedo este pex');
    await page.waitForTimeout(15000);
})();