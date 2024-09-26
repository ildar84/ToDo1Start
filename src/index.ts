import "./styles/styles.css"

import { todos } from './utils/constants';

const itemElement = document.querySelector('.todos__list');

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement;

function createItem (name :string) {
    const templateElemnet = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;

    const item = templateElemnet.querySelector('.todo-item__text');

    item.textContent = name;

    return templateElemnet;

}

todos.forEach( item => {
    const templateElemnet = createItem(item);
    itemElement.prepend(templateElemnet);
});

