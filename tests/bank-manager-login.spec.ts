import {test, expect} from '../fixtures/base-fixtures';
test.describe('Bank Manager Login Flow', async() => {

test('Add customer', async ({loginPage, bankManagerDashboardPage }) => {

    await loginPage.goto();
    await loginPage.clickBankManagerLogin();
    await bankManagerDashboardPage.addCustomer();
})
test('Open Account', async ({loginPage, bankManagerDashboardPage }) => {

    await loginPage.goto();
    await loginPage.clickBankManagerLogin();
    await bankManagerDashboardPage.openAccount();
})
test('View Customers', async ({loginPage, bankManagerDashboardPage }) => {

    await loginPage.goto();
    await loginPage.clickBankManagerLogin();
    await bankManagerDashboardPage.customerList();
})
})
