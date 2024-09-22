import { DashboardPage } from '../../../pageobjects/dashboard.page.js'
import { testData } from './dashboard.homePage.testData.js'

const dashboardPage = new DashboardPage()
const { inputValues, expectedValues } = testData

describe('OrangeHRM dashboard tests - @dashboardOHRM', () => {
    
    it("Check all the boards on the homepage of dashboard - @dashboardOHRM-homepage", async () => {
        log.info("1. Go to dashboard page");
        await dashboardPage.open(inputValues.username, inputValues.password);
        log.info("Go to dashboard page successfully");

        log.info("2.Check all the board titles on the page");
        let boards = await dashboardPage.dashboardWidgets;
        let boardTitles = [];
        for (let b of boards) {
            const header = await dashboardPage.widgesTitles(b);
            const title = await header.getText();
            boardTitles.push(title);
        }
        await expectWDIO(boardTitles).toEqual(expectedValues.boardTitles);
        log.info('All the boards are shown on the home page');
    })
})
