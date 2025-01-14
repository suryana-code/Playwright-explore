import { test, expect } from "@playwright/test";

test("Selector Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // await page.waitForSelector('text=LOGIN', {timeout:100})
  await page.pause();
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("Demo");

  //Using CSS Selector
  await page.locator("#login-button").click();

  //Using XPath
  await page.locator('//*[@id="user-name"]').clear();
  await page.locator('//*[@id="user-name"]').fill("Holla");

  //Using Text
  await page.locator("text=LOGIN").click();
  await page.locator('input:has-text("LOGIN")').click();

  //Using Playwright Inspector
  await page.locator('[data-test="username"]').fill("Amigos");

  //Expect to have count object 1
  await expect(page.locator("text=LOGIN")).toHaveCount(1);

  // await page.pause()
});

test.only("Test priority", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.pause();
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Manda User").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});
