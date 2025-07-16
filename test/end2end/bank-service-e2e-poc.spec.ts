import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  const userId = new Date().getUTCSeconds();
  await page.goto('http://local.lendio.com/bp/owner-info');
  await page.getByLabel('First Name').fill('Test');
  await page.getByLabel('Last Name').fill('User');
  await page.getByLabel('Email Address').fill(`dallin.jones+dj${userId}@lendio.com`);
  await page.getByLabel('Mobile Phone').fill('5555555555');
  await page.getByLabel('Business Name').fill('Test Business Name');
  await page.fill('#password', 'T3st1234!');
  await page.focus('#confirmPassword');
  await page.fill('#confirmPassword', 'T3st1234!');


  await page.click('#lets-go');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Lendio - Documents/);
});
