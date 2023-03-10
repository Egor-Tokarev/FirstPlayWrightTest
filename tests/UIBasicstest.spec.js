const { test, expect } = require('@playwright/test');

test.only('Browser Context Playright test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    console.log(await page.title());

    await userName.type("rahulshetty"); // rahulshettyacademy
    await page.locator("[type='password']").type("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //type - fill 
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    // console.log (await page.locator(".card-body a").first.textContent()); - another way
    console.log(await page.locator(".card-body a").nth(0).textContent());
}); 
 