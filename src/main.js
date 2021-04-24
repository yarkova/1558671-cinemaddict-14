import {createSiteMenuTemplate} from './view/site-menu.js';
//import {createStatsTemplate} from './view/stats.js';
import {createProfileTemplate} from './view/profile.js';
import {createSortTemplate} from './view/sort.js';
import {createFilmsTemplate} from './view/films.js';
//import {createFilmFilterTemplate} from './view/films-extra.js';
import {createFooterTemplate} from './view/footer.js'
//import {createPopupTemplate} from './view/popup.js';

import {generateFilms} from './mock/film.js';

const films = generateFilms();
console.log(films);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

const siteMainElement = document.querySelector('.main');
render (siteMainElement, createSiteMenuTemplate(), 'beforeend');


//const statsElement = document.querySelector('body');
//render (statsElement, createStatsTemplate(), 'beforeend');


const headerElement = document.querySelector('.header');
render (headerElement, createProfileTemplate(), 'beforeend');


const sortElement = document.querySelector('.main');
render (sortElement, createSortTemplate(), 'beforeend');


const filmsElement = document.querySelector('.main');
render (filmsElement, createFilmsTemplate(films), 'beforeend');



// const filmFilterElement = document.querySelector('.main');
// render (filmFilterElement, createFilmFilterTemplate(), 'beforeend');

const footerElement = document.querySelector('.footer');
render (footerElement, createFooterTemplate(), 'beforeend');

//const popupElement = document.querySelector('body');
//render (popupElement, createPopupTemplate(), 'beforeend');
