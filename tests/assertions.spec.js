import { expect, test } from "@playwright/test";

test("assertion demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  await page.pause();

  //Check element present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);

  if (await page.$("text=The Kitchen")) {
    await page.locator("text=The Kitchen").click();
  }
});
