import { Page } from "../../core/templates/page";

export class MainPage extends Page {

    static TextObject = {
        MainTitle: 'Ваши любимые товары с быстрой доставкой!',
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        fetch('./main.html')
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