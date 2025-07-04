import { expect, type Page, type Locator, defineConfig } from '@playwright/test';


export class HomePage {

    readonly page : Page;
    readonly homeButton : Locator;
    readonly bankManagerLoginButton : Locator;
    readonly customerLoginButton : Locator;


    constructor(page : Page) {
        this.page = page
        this.homeButton = page.getByRole('button', {name : 'Home'});
        this.bankManagerLoginButton = page.getByRole('button' , {name : 'Bank Manager Login'});
        this.customerLoginButton = page.getByRole('button', {name : 'Customer Login'});

    }

    async goto() {
        await this.page.goto('/angularJs-protractor/BankingProject/#/login');

    }

    async showHomePageButton() {
        await expect(this.homeButton).toBeVisible();
    }

    async clickBankManagerLoginButton() {
    await expect(this.bankManagerLoginButton).toBeVisible();

}

    async clickCustomerLoginButton() {
        await expect(this.customerLoginButton).toBeVisible();
    }


}