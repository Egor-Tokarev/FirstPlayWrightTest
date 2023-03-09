const {test, expect} = require('@playwright/test');

test('Browser Context Playright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());
    await page.locator('#username').type('rahulshetty'); // rahulshettyacademy
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();
    console.log (await page.locator("[style*='block']").textContent());
    await expect (page.locator("[style*='block']")).toContainText('Incorrect');
});
