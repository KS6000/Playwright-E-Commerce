export class PracticePage {

    constructor(page) {
        this.page = page;

        this.ecommerceLink = page.getByRole('button', {
            name: 'Start practising'
        }).nth(2);
    }

    async openEcommerce() {
        await this.ecommerceLink.click();
    }
}