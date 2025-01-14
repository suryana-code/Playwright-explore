import { test, expect } from "@playwright/test";

test.skip("This step is for SKIP", async ({ page }) => {
  //this annotation when the test is not applicable in some configuration
});

test("This step is for FAIL", async ({ page }) => {
  test.fail();
});

test.fixme("This step is for FIXME", async ({ page }) => {
  //..
});

test("This step is for SLOW", async ({ page }) => {
  test.slow();
});

test.only("This step is ONLY for", async ({ page }) => {
  //..
});

//with TAG (you can run with 'npx playwright test <project> --project chromium --grep "@tags"')
//skip test 'npx playwright test <project> --project chromium --grep-invert "@tags"'
test("test with tag @sanity", async ({ page }) => {
  //..
});
