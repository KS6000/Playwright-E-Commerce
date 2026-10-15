export class HomePage {

    constructor(page) {
        this.page = page;

        this.startPracticingLink = page.getByRole('button', {
            name: 'Start Practicing'
        });
    }

    async goto() {
        await this.page.goto('/');
    }

    async clickStartPracticing() {
        await this.startPracticingLink.click();
    }
}