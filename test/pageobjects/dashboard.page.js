import { Page } from './page'

export class DashboardPage extends Page {
    get pageTitle(){
        return $('.oxd-topbar-header-title');
    }

    get boardGrid(){
        return $('.oxd-grid-3.orangehrm-dashboard-grid');
    }

    get dashboardWidgets(){
        return this.boardGrid.$$('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget');
    }

    get assignLeaveButton(){
        return $('button[title="Assign Leave"]');
    }

    async widgesTitles(element){
        return await element.$('.orangehrm-dashboard-widget-header');
    }

    async open(username, password) {
        await super.loginToPage('/web/index.php/dashboard/index', username, password);
    }
}

