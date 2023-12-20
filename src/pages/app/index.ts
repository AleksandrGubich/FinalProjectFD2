import { Header } from '../../core/templates/components/header';
import { Page } from '../../core/templates/page';
import { AboutUsPage } from '../aboutUs';
import { BucketPage } from '../bucket';
import { ErrorPage, ErrorTypes } from '../error';
import { MainPage } from "../main";

export const enum PageIds {
    MainPage = 'main-page',
    AboutUsPage = 'about-us-page',
    BucketPage = 'bucket-page',
}

export class App {
    private static container: HTMLElement = document.body;
    private static defaultPadeId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPadeId}`);

        if (currentPageHTML) {
            currentPageHTML.remove();
        }

        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.AboutUsPage) {
            page = new AboutUsPage(idPage);
        } else if (idPage === PageIds.BucketPage) {
            page = new BucketPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPadeId;
            App.container.append(pageHTML)
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header', 'header-container');
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
}