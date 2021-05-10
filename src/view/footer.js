import {createElement} from '../common/utils.js';

const createFooterTemplate = () => {
  return `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`
}

export default class Footer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterTemplate();
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
};
