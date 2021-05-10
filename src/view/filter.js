import {createElement} from '../common/utils.js';

const createFilterItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;


}

const createFilterTemplate = (filterItems) => {
  const filterItemTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join('');

  return <span class="main-navigation__item-count">${filterItemTemplate}</span>
}

export default class Filter {
  constructor(filters) {
    this._filters = filters,
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
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
