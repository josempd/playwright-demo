import { test, expect } from '@playwright/test';

test('buy an item', async ({ page }) => {
  await page.goto('')
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.fill('input[data-test="username"]', 'standard_user')
  await page.fill('input[data-test="password"]', 'secret_sauce')
  await page.click('input:has-text("LOGIN")')
  await expect(page).toHaveTitle(/Swag Labs/);

  const item = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
  await item.click()
  const cart = page.locator('[class="shopping_cart_link"]')
  await cart.click()

  const cartTitle = page.locator('[class="title"]')
  await expect(cartTitle).toHaveText(/Your Cart/);
  const checkout = page.locator('[data-test="checkout"]')
  await checkout.click()

  const checkoutTitle = page.locator('[class="title"]')
  await expect(checkoutTitle).toHaveText(/Checkout/);
  await page.fill('input[data-test="firstName"]', 'TESTUSERFIRSTNAME')
  await page.fill('input[data-test="lastName"]', 'TESTUSERLASTNAME')
  await page.fill('input[data-test="postalCode"]', '00000')
  const cont = page.locator('[data-test="continue"]')
  await cont.click()

  const overviewTitle = page.locator('[class="title"]')
  await expect(overviewTitle).toHaveText(/Overview/);
  const finish = page.locator('[data-test="finish"]')
  await finish.click()
  
  const thankYou = page.locator('[class="complete-header"]')
  await expect(thankYou).toHaveText("THANK YOU FOR YOUR ORDER")

});
