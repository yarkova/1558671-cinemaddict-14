import SiteMenu from './view/site-menu.js';
//import Stats from './view/stats.js';
import Profile from './view/profile.js';
import Sort from './view/sort.js';
import Films from './view/films.js';
//import FilmFilter from './view/films-extra.js';
import Footer from './view/footer.js'
import Popup from './view/popup.js';

import {generateFilms} from './mock/film.js';
import {renderTemplate, renderElement, RenderPosition} from './common/utils.js';
import {getRandomInteger, getRandomFloat} from './common/utils.js'

const films = generateFilms();
console.log(films);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

const siteMainElement = document.querySelector('.main');
renderElement (siteMainElement,  new SiteMenu().getElement(), RenderPosition.BEFOREEND);



//onst statsElement = document.querySelector('body');
//renderElement (statsElement, new Stats().getElement(), RenderPosition.BEFOREEND);


const headerElement = document.querySelector('.header');
renderElement (headerElement, new Profile().getElement(), RenderPosition.BEFOREEND);


const sortElement = document.querySelector('.main');
renderElement (sortElement, new Sort().getElement(), RenderPosition.BEFOREEND);


const filmsElement = document.querySelector('.main');
renderElement (filmsElement, new Films(films).getElement(), RenderPosition.BEFOREEND);
const ClickItems = document.querySelectorAll('.film-card__title, .film-card__poster, .film-card__comments');
for (let element of ClickItems) {
  element.onclick = function () {
    const popupElement = document.querySelector('body');
    const newPopup = new Popup();
    newPopup.getElement().querySelector('.film-details__close-btn').onclick = function () {
      popupElement.removeChild(newPopup.getElement());
    }
    renderElement (popupElement, newPopup.getElement(), RenderPosition.BEFOREEND);

  }

};



// const filmFilterElement = document.querySelector('.main');
// renderElement (filmFilterElement, new FilmFilter().getElement(), RenderPosition.BEFOREEND);

const footerElement = document.querySelector('.footer');
renderElement (footerElement, new Footer().getElement(), RenderPosition.BEFOREEND);
