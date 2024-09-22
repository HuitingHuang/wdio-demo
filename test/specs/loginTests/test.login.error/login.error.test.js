import { LoginPage } from '../../../pageobjects/login.page.js'
import { testData } from './login.error.testData.js'

const loginPage = new LoginPage()
const {inputValues, expectedValues} = testData

describe('OrangeHRM login tests - @loginOHRM', () => {

    it("Login with valid username and invalid password - @loginOHRM-error", async () => {
        log.info('1. Go to the OrangeHRM login page');
        await loginPage.open();
        log.info('Go to the login page successfully');

        log.info('2. Enter the username and password and login');
        await loginPage.login(inputValues.username, inputValues.password);
        let alertText = await loginPage.alertText.getText();
        let expectedAlertText = expectedValues.alertText;
        await expectWDIO(alertText).toBe(expectedAlertText);
        log.info("The error message shows successfully");
    } )

}) 