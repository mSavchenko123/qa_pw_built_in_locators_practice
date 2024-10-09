import { test } from '@playwright/test';

test('Sign in flow test', async ({ page }) => {
 /*
  1. Open the Conduit Sign in page https://conduit.mate.academy/user/login
  2. Enter Email 
  3. Enter Password
  4. Click Sign in button
  5. Wait for the Home page URL https://conduit.mate.academy
  6.  Click the “Your Feed” tab 
 */

  await page.goto('https://coffee-cart.app/');
});