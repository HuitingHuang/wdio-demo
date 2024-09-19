import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('.oxd-button');
    }

    get alertText() {
        return $('.oxd-alert-content-text');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return await browser.url('/web/index.php/auth/login');
    }
}
