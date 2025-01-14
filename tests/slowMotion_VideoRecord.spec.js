import { test, expect, chromium } from "@playwright/test";
import fs from "fs/promises";

test("Slow Motion Testing Recorder", async () => {
  const browser = await chromium.launch({
    slowMo: 500,
    headless: false,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: "video/",
      size: { width: 800, height: 600 },
    },
  });
  const page = await context.newPage();
  // await page.pause()

  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForSelector("text=Dashboard", { state: "visible" });
  await expect(
    page.getByRole("banner").getByRole("img", { name: "profile picture" }),
  ).toBeVisible();
  await page
    .getByRole("banner")
    .getByRole("img", { name: "profile picture" })
    .click();
  await page.getByRole("menuitem", { name: "Logout" }).click();

  //get path video & rename file
  const videoPath = await page.video().path();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const newVideoPath = `video/test-recording-${timestamp}.mp4`;
  await fs.rename(videoPath, newVideoPath);
  console.log(`Video saved as: ${newVideoPath}`);
});
