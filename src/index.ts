import "./styles/styles.css"
import { todos } from "./utils/constants"

const contentElement = document.querySelector('.todos__list')

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement



todos.forEach( item => {
    const itemElement = createItem(item)
    contentElement.prepend(itemElement);
})
