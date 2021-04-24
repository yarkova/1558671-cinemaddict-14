export const createFilmsTemplate = (card) => {


const createFilmCard = (cardItem) => {

  return `<article class="film-card">
  <h3 class="film-card__title">${cardItem.title}</h3>
  <p class="film-card__rating">${cardItem.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${cardItem.date.getFullYear()}</span>
    <span class="film-card__duration">${cardItem.duration}</span>
    <span class="film-card__genre">${cardItem.genre}</span>
  </p>
  <img src=${cardItem.image} alt="" class="film-card__poster">
    <p class="film-card__description">${cardItem.description}</p>
    <a class="film-card__comments">${cardItem.comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
    </article>`
}

const createFilmList = (title, filmsArray, isExtra = false) => {
  const classList = isExtra ? 'films-list films-list--extra' : 'films-list';
  return `  <section class="${classList}">
      <h2 class="films-list__title ">${title}</h2>

      <div class="films-list__container">
          ${filmsArray.map(createFilmCard).join('')}
          </div>

          ${isExtra ? '' : '<button class="films-list__show-more">Show more</button>'}
          </section>`
};

return `<section class="films">
${createFilmList('All movies. Upcoming', card)}
${createFilmList('Top rated', card.slice(2, 4), true)}
${createFilmList('Most commented', card.slice(2, 4), true)}



          </section>`

}
