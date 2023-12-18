import { Page } from "../../core/templates/page";

export class AboutUsPage extends Page {

    static TextObject = {
        MainTitle: 'About Us Page',
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(AboutUsPage.TextObject.MainTitle)
        this.container.append(title);
        return this.container;
    }
}