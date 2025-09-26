import {Page, Locator} from '@playwright/test';


export class TransactionsPage {
    readonly page : Page;
    //readonly  transactions: Locator;
    readonly backButton : Locator;
    readonly resetButton : Locator;
    readonly dateTime : Locator;
    readonly amount : Locator;
    readonly transactionType : Locator;
    readonly logoutButton : Locator;


    constructor(page : Page) {
        this.page = page;
        this.backButton = page.getByRole('button', { name: 'Back' })
        this.resetButton = page.getByRole('button', { name: 'Reset' })
        this.dateTime = page.getByRole('link', { name: 'Date-Time' })
        this.amount = page.getByText('Amount')
        this.transactionType = page.getByText('Transaction Type')
        this.logoutButton = page.getByRole('button', { name: 'Logout' })

}

      async Logout() {
       await this.logoutButton.click();
   }


}

