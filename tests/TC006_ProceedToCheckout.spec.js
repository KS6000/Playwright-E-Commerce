import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage';
import { PracticePage } from '../pages/PracticePage';
import { EcommercePage } from '../pages/EcommercePage';

test('TC006 Proceed to checkout', async ({ page }) => {

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

    await ecommercePage.proceedToCheckout();
});