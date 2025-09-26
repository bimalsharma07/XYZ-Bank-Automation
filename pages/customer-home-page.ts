import {Page, Locator} from '@playwright/test';
import { testData } from '../fixtures/test-data';

export class CustomerHomePage {
    readonly page: Page;
    readonly userSelect: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;


    constructor (page: Page) {
        this.page = page;
        this.userSelect = page.locator('select#userSelect');
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.logoutButton = page.getByRole('button', {name: 'Logout'});
    }

    async selectCustomer() {
        await this.userSelect.selectOption({index: 1 });
    }
    async login() {
        await this.loginButton.click();
    }

}