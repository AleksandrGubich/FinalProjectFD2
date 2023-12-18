import { Page } from "../../core/templates/page";

export class BucketPage extends Page {

    static TextObject = {
        MainTitle: 'Bucket Page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(BucketPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}