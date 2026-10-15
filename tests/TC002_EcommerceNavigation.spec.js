import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage';
import { PracticePage } from '../pages/PracticePage';

test('TC002 Verify navigation to E-commerce practice page', async ({ page }) => {

    const homePage = new HomePage(page);
    const practicePage = new PracticePage(page);

    await homePage.goto();

    await homePage.clickStartPracticing();

    await practicePage.openEcommerce();

    await expect(page).toHaveURL(/practice-ecommerece-website/);

    await expect (page.getByRole('heading', { name: 'E-commerce Automation Practice' }

    )).toBeVisible();
});