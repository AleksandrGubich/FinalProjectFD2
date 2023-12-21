import { Page } from "../../core/templates/page";

export class AboutUsPage extends Page {

    static TextObject = {
        MainTitle: 'Мы любим петь Lorem!',
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(AboutUsPage.TextObject.MainTitle);
        fetch('./about-us.html')
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