import { Page } from './page'

export class AssignLeavePage extends Page {
    get pageTitle(){
        return $('.oxd-text.oxd-text--h6.orangehrm-main-title')
    }

    get nameInput(){
        return $("//div[@class='oxd-autocomplete-text-input oxd-autocomplete-text-input--active']//input")
    }

    get fieldErrorMsg(){
        return $('.oxd-input-field-error-message')
    }

    async open(username, password) {
        await super.loginToPage('/web/index.php/leave/assignLeave', username, password);
    }
}