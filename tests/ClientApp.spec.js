const { test, expect } = require('@playwright/test');

test('Browser Context Playright test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').type("Iamking@000", { delay: 400 });  //delay - time to print
    await page.locator("[value='Login']").click();
 // await page.waitForLoadState('domcontentloaded'); not work 
    await page.waitForTimeout(3000); 
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    console.log('waitForTimeout'); 
});