export const createFilmsTemplate = () => {
 const card = [{
   title: 'The Dance of Life',
   rating: '8.3',
   year: '1929',
   duration: '1h 55m',
   genre: 'Musical',
   image: './images/posters/the-dance-of-life.jpg',
   description: 'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',
   comments: '5 comments'
 },{
   title: 'Sagebrush Trail',
   rating: '3.2',
   year: '1933',
   duration: '54m',
   genre: 'Western',
   image: './images/posters/sagebrush-trail.jpg',
   description: 'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brants narrow escap…',
   comments: '89 comments'

 },{
   title: 'The Man with the Golden Arm',
   rating: '9.0',
   year: '1955',
   duration: '1h 59m',
   genre: 'Drama',
   image: './images/posters/the-man-with-the-golden-arm.jpg',
   description: 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…',
   comments: '18 comments'

 },{
   title: 'Santa Claus Conquers the Martians',
   rating: '2.3',
   year: '1964',
   duration: '1h 21m',
   genre: 'Comedy',
   image: './images/posters/santa-claus-conquers-the-martians.jpg',
   description: 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',
   comments: '465 comments'

 },{
   title: 'Popeye the Sailor Meets Sindbad the Sailor',
   rating: '6.3',
   year: '1936',
   duration: '16m',
   genre: 'Cartoon',
   image: './images/posters/popeye-meets-sinbad.png',
   description: 'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…',
   comments: '0 comments'

 },
];

const createFilmList = (cardItem) => {

  return `<article class="film-card">
  <h3 class="film-card__title">${cardItem.title}</h3>
  <p class="film-card__rating">${cardItem.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${cardItem.year}</span>
    <span class="film-card__duration">${cardItem.duration}</span>
    <span class="film-card__genre">${cardItem.genre}</span>
  </p>
  <img src=${cardItem.image} alt="" class="film-card__poster">
    <p class="film-card__description">${cardItem.description}</p>
    <a class="film-card__comments">${cardItem.comments}</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
    </article>`
}

return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

    <div class="films-list__container">
        ${card.map(createFilmList).join('')}
        </div>
        <button class="films-list__show-more">Show more</button>
        </section>

        <section class="films-list films-list--extra">
          <h2 class="films-list__title">Top rated</h2>

          <div class="films-list__container">
            <article class="film-card">
              <h3 class="film-card__title">The Man with the Golden Arm</h3>
              <p class="film-card__rating">9.0</p>
              <p class="film-card__info">
                <span class="film-card__year">1955</span>
                <span class="film-card__duration">1h 59m</span>
                <span class="film-card__genre">Drama</span>
              </p>
              <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
              <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
              <a class="film-card__comments">18 comments</a>
              <div class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
              </div>
            </article>

            <article class="film-card">
              <h3 class="film-card__title">The Great Flamarion</h3>
              <p class="film-card__rating">8.9</p>
              <p class="film-card__info">
                <span class="film-card__year">1945</span>
                <span class="film-card__duration">1h 18m</span>
                <span class="film-card__genre">Mystery</span>
              </p>
              <img src="./images/posters/the-great-flamarion.jpg" alt="" class="film-card__poster">
              <p class="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>
              <a class="film-card__comments">12 comments</a>
              <div class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
              </div>
            </article>
          </div>
        </section>

        <section class="films-list films-list--extra">
          <h2 class="films-list__title">Most commented</h2>

          <div class="films-list__container">
            <article class="film-card">
              <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>
              <p class="film-card__rating">2.3</p>
              <p class="film-card__info">
                <span class="film-card__year">1964</span>
                <span class="film-card__duration">1h 21m</span>
                <span class="film-card__genre">Comedy</span>
              </p>
              <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">
              <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>
              <a class="film-card__comments">465 comments</a>
              <div class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
              </div>
            </article>

            <article class="film-card">
              <h3 class="film-card__title">Made for Each Other</h3>
              <p class="film-card__rating">5.8</p>
              <p class="film-card__info">
                <span class="film-card__year">1939</span>
                <span class="film-card__duration">1h 32m</span>
                <span class="film-card__genre">Comedy</span>
              </p>
              <img src="./images/posters/made-for-each-other.png" alt="" class="film-card__poster">
              <p class="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>
              <a class="film-card__comments">56 comments</a>
              <div class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
              </div>
            </article>
          </div>
        </section>
       </section>

          </section>`

}
