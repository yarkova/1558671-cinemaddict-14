import Abstract from '../utils/abstract.js';

const createFooterTemplate = () => {
  return `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`
}

export default class Footer extends Abstract {

  getTemplate() {
    return createFooterTemplate();
  }
};
