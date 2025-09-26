import { BankManagerDashboardPage } from '../pages/bankmanager-dashboard-page';
import { CustomerDashboardPage } from '../pages/customer-dashboard-page';
import { CustomerHomePage } from '../pages/customer-home-page';
import { TransactionsPage } from '../pages/transactions-page';
import { LoginPage } from './../pages/login-page';
import {test as base} from '@playwright/test';


type MyFixtures = {
    loginPage : LoginPage;
    customerHomePage: CustomerHomePage;
    customerdashboardPage: CustomerDashboardPage;
    transactionsPage : TransactionsPage;
    bankManagerDashboardPage : BankManagerDashboardPage;
}

export const test = base.extend<MyFixtures>({
    loginPage : async ({page}, use) => {
        await use(new LoginPage(page));
    },
    customerHomePage : async ({page}, use) => {
        await use(new CustomerHomePage(page));
    },
    customerdashboardPage: async ({page}, use) => {
        await use(new CustomerDashboardPage(page));
    },
    transactionsPage : async ({page}, use) => {
        await use(new TransactionsPage(page));
    },
    bankManagerDashboardPage : async ({page}, use) => {
        await use(new BankManagerDashboardPage(page));
    }
})

export {expect} from '@playwright/test';