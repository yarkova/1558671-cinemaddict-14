import Abstract from '../utils/abstract.js';

const createFilterItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;


}

const createFilterTemplate = (filterItems) => {
  const filterItemTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join('');

  return <span class="main-navigation__item-count">${filterItemTemplate}</span>
}

export default class Filter extends Abstract{
  constructor(filters) {
    super();
    this._filters = filters,
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
