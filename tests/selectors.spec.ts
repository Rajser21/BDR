import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');
  await expect(page.locator('h2')).toContainText('Discount 20% For All Orders Over $2000');
});


//zakładka męczyzn, buty, sprawdzamy czy nazwa butów się wyświetla poprawnie po przejściu na stronę.
