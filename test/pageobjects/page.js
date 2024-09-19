import { LoginPage } from './login.page'
const loginPage = new LoginPage();
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    async loginToPage(path, username, password) {
        await loginPage.open();
        await loginPage.login(username, password);
        await browser.url(path);
    }
}
