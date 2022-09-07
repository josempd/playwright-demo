import { test, expect } from '@playwright/test';

test('Fail to login', async ({ page }) => {
  await page.goto('')
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.fill('input[data-test="username"]', 'fail')
  await page.fill('input[data-test="password"]', 'fail')
  await page.click('input:has-text("LOGIN")')
  const errorMessage = page.locator('[data-test="error"]')
  await expect(errorMessage).toHaveText(/Epic sadface/)
});
