import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/instrus/');
})

test('login et accès aux joueurs', async ({ page }) => {
    await page.goto('http://localhost:5173/instrus/');
    await page.getByPlaceholder('Email...').fill('jc1932@gmail.com');
    await page.getByPlaceholder('Password...').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL('**/players');
    await expect(page.getByRole('table')).toBeVisible();
});
