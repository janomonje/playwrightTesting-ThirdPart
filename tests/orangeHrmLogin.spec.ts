import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('[placeholder="Username"]').fill('Admin')
  await page.locator('[placeholder="Password"]').fill('admin123')
  await page.locator('[type="submit"]').click()
  await page.locator('.oxd-userdropdown').click()
  await page.locator('text=Logout').click()
  await page.close();
  
});