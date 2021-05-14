import SiteMenu from './view/site-menu.js';
//import Stats from './view/stats.js';
import Profile from './view/profile.js';
import Sort from './view/sort.js';
import Films from './view/films.js';
//import FilmFilter from './view/films-extra.js';
import Footer from './view/footer.js';
import Popup from './view/popup.js';
import FilmsEmpty from './view/films-empty.js';

import {generateFilms} from './mock/film.js';
import {render, RenderPosition, replace, remove} from './utils/render.js';
import {getRandomInteger, getRandomFloat} from './utils/common.js'

const films = generateFilms();
console.log(films);




const siteMainElement = document.querySelector('.main');
render (siteMainElement,  new SiteMenu().getElement(), RenderPosition.BEFOREEND);



//const statsElement = document.querySelector('body');
//render (statsElement, new Stats().getElement(), RenderPosition.BEFOREEND);


const headerElement = document.querySelector('.header');
render (headerElement, new Profile().getElement(), RenderPosition.BEFOREEND);


const sortElement = document.querySelector('.main');
render (sortElement, new Sort().getElement(), RenderPosition.BEFOREEND);
 const openPopupHandler = function () {
  const popupElement = document.querySelector('body');
  const newPopup = new Popup(popupElement);
  const closePopupHandler = function () {
    popupElement.removeChild(newPopup.getElement());
    document.removeEventListener('keydown', onEscKeyDown);
  };
  newPopup.setCloseClickHandler(closePopupHandler) ;
  const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closePopupHandler();
  }
};

  render (popupElement, newPopup.getElement(), RenderPosition.BEFOREEND);
  document.addEventListener('keydown', onEscKeyDown);
}


const filmsElement = document.querySelector('.main');
const filmsTemplate = new Films(films);
render (filmsElement, filmsTemplate.getElement(), RenderPosition.BEFOREEND);

const ClickItems = document.querySelectorAll('.film-card__title, .film-card__poster, .film-card__comments');
for (let element of ClickItems) {
element.onclick = openPopupHandler;
};
//    const filmsEmptyElement = document.querySelector('.main');

//    if (films.every(film)) {
//      renderElement (filmsEmptyElement, new FilmsEmpty().getElement(), RenderPosition.BEFOREEND);
  //  }

//filmsEmptyElement, new FilmsEmpty().getElement(), RenderPosition.BEFOREEND

// const filmFilterElement = document.querySelector('.main');
// render (filmFilterElement, new FilmFilter().getElement(), RenderPosition.BEFOREEND);

const footerElement = document.querySelector('.footer');
render (footerElement, new Footer().getElement(), RenderPosition.BEFOREEND);
