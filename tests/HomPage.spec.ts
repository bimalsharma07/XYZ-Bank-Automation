import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';


test('Home Page', async({page}) => {
    const homePage = new HomePage(page);


    await homePage.goto();
    await homePage.showHomePageButton();
    await homePage.clickBankManagerLoginButton();

})