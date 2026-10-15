import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage';

test('TC001 Verify QA practice homepage loads successfully', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(page).toHaveTitle(/QA practice/i);
});