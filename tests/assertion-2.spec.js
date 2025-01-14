import { test, expect } from "@playwright/test";

test("Assertion-2", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");

  // Pause untuk membuka Playwright Inspector
  // await page.pause();

  // Check elemen present atau tidak
  await expect(page.locator("text=A pantry full of web")).toHaveCount(1);

  if (await page.$("text=A pantry full of web")) {
    await page.locator("text=A pantry full of web").click();
  }

  // Check elemen visible
  await expect(
    page.getByRole("img", { name: "Chefs with code ingredients" }),
  ).toBeVisible();

  // Check elemen memiliki teks tertentu atau tidak
  await expect(page.locator("text=A pantry full of web")).toHaveText(
    "A pantry full of web components that can be used for automated testing.",
  );
  await expect(page.locator("text=A pantry full of web")).not.toHaveText(
    "AABBCC",
  );

  //check elemeent memiliki elemeent tertentu
  await expect(
    page.getByRole("img", { name: "Chefs with code ingredients" }),
  ).toHaveClass(/.*css-1ws335m/);
  await expect(
    page.getByRole("img", { name: "Chefs with code ingredients" }),
  ).toHaveClass("chakra-image css-1ws335m");
});
