import logger from '@wdio/logger'
const log = logger('myLoginTests')
import { expect } from '@wdio/globals'
import { LoginPage } from '../../../pageobjects/login.page.js'
const loginPage = new LoginPage()

describe('OrangeHRM login tests - @loginOHRM', () => {

    it("Login with valid username and invalid password - @loginOHRM-error", async () => {
        log.info('1. Go to the OrangeHRM login page');
        await loginPage.open();
        log.info('Go to the login page successfully');

        log.info('2. Enter the username and password and login');
        await loginPage.login(browser.testData.inputValues.username, browser.testData.inputValues.password);
        let alertText = await loginPage.alertText.getText();
        let expectedAlertText = browser.testData.expectedValues.alertText;
        await expect(alertText).toBe(expectedAlertText);
        log.info("The error message shows successfully");
    } )

}) 