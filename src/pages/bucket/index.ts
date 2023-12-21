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
        fetch('./bucket.html')
            .then(response => response.text())
            .then(htmlContent => {
                const newDiv = document.createElement('div');
                newDiv.innerHTML = htmlContent;

                this.container.append(title, newDiv);
            })
            .catch(error => {
                console.error('Ошибка загрузки HTML:', error);
            });

        return this.container;
    }
}