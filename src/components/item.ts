// export function createItem(template: HTMLTemplateElement, name: string) {
//     const itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
//     const title = itemElement.querySelector('.todo-item__text')
//     title.textContent = name;
//     return itemElement;
// }

export class Item {
    
    protected itemElement: HTMLElement;
    protected title: HTMLElement;

    constructor (template: HTMLTemplateElement) {
        this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
        this.title = this.itemElement.querySelector('.todo-item__text');
    }

    render(item: string) {
        this.title.textContent = item;
        return this.itemElement;    
    }
}