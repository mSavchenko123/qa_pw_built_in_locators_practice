import { test } from '@playwright/test';

test('Sign up flow test', async ({ page }) => {
 /*
  1. Open the Conduit registration page https://conduit.mate.academy/user/register
  2. Enter Username
  3. Enter Email 
  4. Enter Password
  5. Click Sign in button
  6. Wait for the Home page URL https://conduit.mate.academy
  7. Check unique element on the page to make sure the user was logged in
 */

  await page.goto('https://conduit.mate.academy/user/register'); 
  await page.getByPlaceholder('Username'). fill('User1');
  await page.getByPlaceholder('Email'). fill('test@gmail.com');
  await page.getByPlaceholder('Password'). fill('newpass123!');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.waitForURL('https://conduit.mate.academy/'); 
  await page.getByText('Your Feed').click();
});