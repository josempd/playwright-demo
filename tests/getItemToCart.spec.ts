import { test, expect } from '@playwright/test';

test('add second item to cart', async ({ page }) => {
  await page.goto('')
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.fill('input[data-test="username"]', 'standard_user')
  await page.fill('input[data-test="password"]', 'secret_sauce')
  await page.click('input:has-text("LOGIN")')
  await expect(page).toHaveTitle(/Swag Labs/);
  const item = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
  await item.click()
});
