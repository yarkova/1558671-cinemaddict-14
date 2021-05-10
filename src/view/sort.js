import {createElement} from '../common/utils.js';

const createSortTemplate = () =>{
  const sort = [{
    text: 'Sort by default',
    href: '#',
    active: false
  },{
    text: 'Sort by date',
    href: '#',
    active: false
  },
  {
    text: 'Sort by rating',
    href: '#',
    active: true
  }
  ];

  const createSortButton = (sortButton) => {
    const classList = sortButton.active ? 'sort__button sort__button--active' : 'sort__button';
    return `<a href="#" class="${classList}">${sortButton.text}</a>`
  }

  return `<ul class="sort">
  ${sort.map(createSortButton).join('')}`;
}

export default class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
