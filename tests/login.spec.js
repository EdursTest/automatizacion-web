const { test, expect } = require('@playwright/test');

test('success pasaste el formulario', async({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('Login Incorrecto', async({ page }) =>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('userfalso');
    await page.locator('#password').fill('12345');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
test('Password Incorrecta', async ({ page }) =>{
   await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('12345');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('#flash')).toContainText('Your password is invalid!'); 
});