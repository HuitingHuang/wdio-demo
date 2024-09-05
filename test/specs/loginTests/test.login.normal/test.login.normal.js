import logger from '@wdio/logger'
const log = logger('myLoginTests')
import { expect } from '@wdio/globals'
import { LoginPage } from '../../../pageobjects/login.page.js'
import { DashboardPage } from '../../../pageobjects/dashboard.page.js'
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('OrangeHRM login tests - @loginOHRM', () => {
    
    it("Login with valid username and password - @loginOHRM-normal", async () => {
        log.info('1. Go to the OrangeHRM login page');
        await loginPage.open();
        log.info('Go to the login page successfully');
        
        log.info('2. Enter the username and password and login');
        await loginPage.login(browser.testData.inputValues.username, browser.testData.inputValues.password);
        let pageTitle = await dashboardPage.pageTitle.getText();
        let expectedPageTitle = browser.testData.expectedValues.pageTitle;
        await expect(pageTitle).toBe(expectedPageTitle);
        log.info("Login into the account successfully");
    } );
    
}) 

