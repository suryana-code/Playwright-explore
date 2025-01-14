const { test, expect } = require("@playwright/test");
const { chromium } = require("@playwright/test");

test("Recorder-2", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_saurd");
  await page.locator('[data-test="password"]').press("ControlOrMeta+a");
  await page.locator('[data-test="password"]').fill("secret_saurce");
  await page.locator('[data-test="password"]').press("ControlOrMeta+a");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button123"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});
