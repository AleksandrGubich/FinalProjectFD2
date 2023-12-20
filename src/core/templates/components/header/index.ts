import { PageIds } from "../../../../pages/app";
import { Component } from "../../components";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Main Page',
    },
    {
        id: PageIds.AboutUsPage,
        text: 'About Us Page',
    },
    {
        id: PageIds.BucketPage,
        text: 'Bucket Page',
    }
]

export class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);
        });

        this.container.append(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}