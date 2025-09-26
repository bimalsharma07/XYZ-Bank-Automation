import {Page , Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly customerLoginButton: Locator;
    readonly bankManagerLoginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.customerLoginButton = page.getByRole('button', { name: 'Customer Login' });
        this.bankManagerLoginButton = page.getByRole('button', { name: 'Bank Manager Login' });
    }
    
    async goto() {
        await this.page.goto('/angularJs-protractor/BankingProject/#/login');
    }
    async clickCustomerLogin() {
        await this.customerLoginButton.click();
    }

    async clickBankManagerLogin() {
        await this.bankManagerLoginButton.click();
    }

}