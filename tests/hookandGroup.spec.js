import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForSelector("text=Dashboard", { state: "visible" });
});

test("Login", async ({ page }) => {
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
});

test("Dashboard & Create Employee", async ({ page }) => {
  await page.getByRole("link", { name: "PIM" }).click();
  await page.waitForSelector("text=Add Employee", { state: "visible" });
  await page.locator("li").filter({ hasText: "Add Employee" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Anonim");
  await page.getByPlaceholder("Middle Name").click();
  await page.getByPlaceholder("Middle Name").fill("Unknow");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("anominUnknow");
  await page.locator("form").getByRole("textbox").nth(4).click();
  await page.locator("form").getByRole("textbox").nth(4).clear();
  await page.getByRole("button", { name: "Save" }).click();
  await page.waitForSelector("text=Personal Details", { state: "visible" });
});

test("Logout", async ({ page }) => {
  await expect(
    page.getByRole("banner").getByRole("img", { name: "profile picture" })
  ).toBeVisible();
  await page
    .getByRole("banner")
    .getByRole("img", { name: "profile picture" })
    .click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});
