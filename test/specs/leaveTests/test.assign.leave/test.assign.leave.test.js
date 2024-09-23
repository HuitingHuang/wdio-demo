import { DashboardPage } from '../../../pageobjects/dashboard.page.js'
import { AssignLeavePage } from '../../../pageobjects/assign.leave.page.js'
import { testData } from './test.assign.leave.testData.js'

const dashboardPage = new DashboardPage()
const assignLeavePage = new AssignLeavePage()
const { inputValues, expectedValues } = testData

describe('OrangeHRM leave tests - @leaveOHRM', () => {
    it('Assign leave to a user', async () => {
        log.info('1. Go to dashboard page and click "Assign Leave" button');
        await dashboardPage.open(inputValues.username, inputValues.password);
        let checkDisplayed = await dashboardPage.assignLeaveButton.isDisplayed();
        let num = 3;
        while (!checkDisplayed && num > 0) {
            await browser.refresh();
            //await browser.pause(500);
            try {
                await dashboardPage.assignLeaveButton.waitForDisplayed({
                    timeout: 5000,
                });
            } catch(err) {
                log.error("Assign Leave Button not displayed after page refresh")
            }
            checkDisplayed = await dashboardPage.assignLeaveButton.isDisplayed();
            num--;
        }
        await dashboardPage.assignLeaveButton.click();
        let leavePageTitle = await assignLeavePage.pageTitle.getText();
        await expectWDIO(leavePageTitle).toBe(expectedValues.leavePageTitle);
        log.info('Go to Assign Leave page successfully');

        log.info('2. Look up a name on Assign Leave page');
        await assignLeavePage.nameInput.setValue(inputValues.name);
        await browser.pause(2000);
        let name = await assignLeavePage.dropdownList.getText();
        await expectWDIO(name).toBe(expectedValues.name);
        log.info("The user name can be found in the dropdown list");
    });
}) 
