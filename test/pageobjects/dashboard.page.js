import { $ } from '@wdio/globals'
import { Page } from './page';

export class DashboardPage extends Page {
    get pageTitle(){
        return $('.oxd-topbar-header-title');
    }
}

