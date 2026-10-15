import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage';
import { PracticePage } from '../pages/PracticePage';
import { EcommercePage } from '../pages/EcommercePage';

test('TC005 Open cart and verify product', async ({ page }) => {

    const homePage = new HomePage(page);
    const practicePage = new PracticePage(page);
    const ecommercePage = new EcommercePage(page);

    await homePage.goto();

    await homePage.clickStartPracticing();

    await practicePage.openEcommerce();

    await ecommercePage.searchProduct('Mouse');

    await expect(page.getByAltText('Wireless Mouse')).toBeVisible();

    await ecommercePage.addProductToCart();

    await ecommercePage.openCart();

    await expect(page.getByText('Wireless Mouse - $25 x 1')).toBeVisible();

    await expect(page.getByText('Total: $25.00')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Proceed to Buy' })).toBeVisible();
});