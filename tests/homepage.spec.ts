import { test, expect } from '@playwright/test';

test('visit swag labs website', async ({ page }) => {
  await page.goto('');

  // Expect the title to have the website name
  await expect(page).toHaveTitle(/Swag Labs/);

  // create a locator for the logo
  const logo = page.locator('class=login_logo');

  // Expect the logo to be visible
  await expect(logo).toBeTruthy
});
