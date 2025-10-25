import {Page, Locator, expect} from '@playwright/test';
import { testData } from '../fixtures/test-data';


export class CustomerDashboardPage {
    readonly page: Page;
    readonly logoutButton: Locator;
    readonly transectionsButton: Locator;
    readonly depositMessage: Locator;
    readonly withDrawalMessage: Locator;
    readonly depositButton: Locator;
    readonly amountInput: Locator;
    readonly amountDepositButton: Locator;
    readonly withDrawlButton: Locator;
    readonly amountwithDrawlButton: Locator;
    readonly  transactions: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.transectionsButton = page.getByRole('button', { name: 'Transactions' });
        this.depositMessage = page.getByText('Deposit Successful')
        this.depositButton = page.getByRole('button', { name: 'Deposit' })
        this.amountInput = page.getByPlaceholder('amount');
        this.amountDepositButton = page.getByRole('form').getByRole('button', { name: 'Deposit' });
        this.withDrawlButton = page.getByRole('button', { name: 'Withdrawl' });
        this.amountwithDrawlButton = page.getByRole('button', { name: 'Withdraw', exact: true })
        this.withDrawalMessage = page.getByText('Transaction successful');
        this.transactions = page.getByRole('button', { name: 'Transactions' })

    }
    async deposit() {
        await this.depositButton.click()
        await this.amountInput.fill(testData.customer.depositAmount);
        await this.amountDepositButton.click();
    }

    async withdrawl() {
        await this.withDrawlButton.click()
        await this.amountInput.fill(testData.customer.withdrawAmount);
        await this.amountwithDrawlButton.click()
    }
    async viewTransactions() {
    await this.transactions.click();
    }
}