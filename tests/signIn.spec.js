import { test, expect } from '@playwright/test';

test('Successful `Sign in` flow test', async ({ page }) => {

 await page.goto('https://conduit.mate.academy/user/login');
 await page.getByPlaceholder('Email'). fill('test_new_user@gmail.com');
 await page.getByPlaceholder('Password'). fill('newpass123!');
 await page.getByRole('button', { name: 'Sign in' }).click();
 await page.waitForURL('https://conduit.mate.academy/');
 await expect(page.getByText('Your Feed')).toBeVisible();

  /*
  7. Assert that the "Global Feed" tab is visible. Use .toBeVisible() method. 
  8. Assert that the "Popular Feeds" section is visible. Use .toBeVisible() method. 
  9. Assert that the "Home" link is not Hidden. Use not.toBeHidden() method. 
  10. Assert the locator with text "No articles are here... yet." is visible. Use .toBeVisible() method. 
 */


});