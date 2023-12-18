import { Page } from '../../core/templates/page';
import { AboutUsPage } from '../aboutUs';
import { BucketPage } from '../bucket';
import { MainPage } from "../main";

export const enum PadeIds {
    MainPage = 'main-page',
    AboutUsPage = 'about-us-page',
    BucketPage = 'bucket-page',
}

export class App {
    private container: HTMLElement;
    private initialPage: MainPage;

    static renderNewPage(idPage: string) {
        document.body.innerHTML = '';
        let page: Page | null = null;

        if (idPage === PadeIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PadeIds.AboutUsPage) {
            page = new AboutUsPage(idPage);
        } else if (idPage === PadeIds.BucketPage) {
            page = new BucketPage(idPage);
        }

        if (page) {
            const pageHTML = page.render();
            document.body.append(pageHTML)
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        })
    }

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page');
    }

    run() {
        App.renderNewPage('bucket-page');
        this.enableRouteChange();
    }
}