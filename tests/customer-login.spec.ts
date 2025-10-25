import {expect, test } from '../fixtures/base-fixtures';
import { testData } from '../fixtures/test-data';
test.describe('Customer Login Flow', () => {
test('Should login as customer', async ({loginPage, customerHomePage, customerdashboardPage}) => {

    await loginPage.goto();
    await loginPage.clickCustomerLogin();
    await customerHomePage.selectCustomer();
    await customerHomePage.login();

    await expect(customerdashboardPage.logoutButton).toBeVisible();

});
test('Customer Should be able to Deposit Amount', async ({loginPage, customerHomePage, customerdashboardPage}) => {

    await loginPage.goto();
    await loginPage.clickCustomerLogin();

    await customerHomePage.selectCustomer();
    await customerHomePage.login();

    await customerdashboardPage.deposit();
    await expect(customerdashboardPage.depositMessage).toBeVisible();
})
test('Customer Should be able to Withdraw Amount', async ({loginPage, customerHomePage, customerdashboardPage}) => {

    await loginPage.goto();
    await loginPage.clickCustomerLogin();

    await customerHomePage.selectCustomer();
    await customerHomePage.login();

    await customerdashboardPage.withdrawl();
    await expect(customerdashboardPage.withDrawalMessage).toBeVisible();

})
test('Customer Should be able to View Transections', async ({loginPage, customerHomePage, customerdashboardPage, transactionsPage}) => {

    await loginPage.goto();
    await loginPage.clickCustomerLogin();

    await customerHomePage.selectCustomer();
    await customerHomePage.login();

    await customerdashboardPage.viewTransactions();
    await expect(transactionsPage.backButton).toBeVisible();
    await expect(transactionsPage.dateTime).toBeVisible();
    await expect(transactionsPage.amount).toBeVisible();
    await expect(transactionsPage.transactionType).toBeVisible();
    await transactionsPage.Logout(); 

})
});