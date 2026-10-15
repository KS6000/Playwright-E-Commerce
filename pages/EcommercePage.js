export class EcommercePage {

    constructor(page) {
        this.page = page;

        this.searchBox = page.getByTestId('ecom-search');
        this.addToCartButton = page.getByTestId('add-to-cart-2');
        this.cartButton = page.getByTestId('ecom-cart-button');
        this.proceedToBuyButton = page.getByRole('button', { name: 'Proceed to Buy' });
        this.fullName = page.getByTestId('ecom-address-name');
        this.streetAddress = page.getByTestId('ecom-address-street');
        this.city = page.getByTestId('ecom-address-city');
        this.state = page.getByTestId('ecom-address-state');
        this.zipCode = page.getByTestId('ecom-address-zip');
        this.saveAddressButton = page.getByTestId('ecom-save-address');
        this.cardNumber = page.getByTestId('ecom-card-number');
        this.expiryDate = page.getByTestId('ecom-expiry');
        this.cvv = page.getByTestId('ecom-cvv');
        this.buyNowButton = page.getByTestId('ecom-buy-now');
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
    }

    async addProductToCart() {
    await this.addToCartButton.click();
    }

    async openCart() {
    await this.cartButton.click();
    await this.proceedToBuyButton.waitFor({state: 'visible'});
    }

    async proceedToCheckout() {
    await this.proceedToBuyButton.click();
    }

    async enterCheckoutDetails(fullName, street, city, state, zipCode) {
    await this.fullName.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);

    await this.fullName.fill(fullName);
    await this.streetAddress.fill(street);
    await this.city.fill(city);
    await this.state.fill(state);
    await this.zipCode.fill(zipCode);
    }

    async saveAddressAndContinue() {
    await this.saveAddressButton.click();
    }

    async enterPaymentDetails(cardNumber, expiryDate, cvv) {
    await this.cardNumber.fill(cardNumber);
    await this.expiryDate.fill(expiryDate);
    await this.cvv.fill(cvv);
    }

    async placeOrder() {
    await this.buyNowButton.click();
    }

};