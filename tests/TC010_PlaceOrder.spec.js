import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage';
import { PracticePage } from '../pages/PracticePage';
import { EcommercePage } from '../pages/EcommercePage';

test('TC010 Place Order', async ({ page }) => {

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

    await ecommercePage.enterCheckoutDetails(
    'John Smith',
    '10 Test Street',
    'London',
    'Greater London',
    'SE18 1AA'
    );

    await expect(ecommercePage.fullName).toHaveValue('John Smith');
    await expect(ecommercePage.streetAddress).toHaveValue('10 Test Street');
    await expect(ecommercePage.city).toHaveValue('London');
    await expect(ecommercePage.state).toHaveValue('Greater London');
    await expect(ecommercePage.zipCode).toHaveValue('SE18 1AA');

    await ecommercePage.saveAddressAndContinue();

    await expect(page.getByRole('heading', { name: 'Payment Details' })).toBeVisible();

    await ecommercePage.enterPaymentDetails(
    '4111111111111111',
    '12/28',
    '123'
    );

    await expect(ecommercePage.cardNumber).toHaveValue('4111111111111111');
    await expect(ecommercePage.expiryDate).toHaveValue('12/28');
    await expect(ecommercePage.cvv).toHaveValue('123');

    await ecommercePage.placeOrder();
});
