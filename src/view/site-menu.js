export const createSiteMenuTemplate = () => {
  const menu = [{
    text: 'All movies',
    href: '#all',
    active: true
  },{
    text: 'Watchlist',
    href: '#watchlist',
    active: false
  },{
    text: 'History',
    href: '#history',
    active: false
  },{
    text: 'Favorites',
    href: '#favorites',
    active: false
  }
];



const createNavigationItem = (menuItem) => {
  const classList = menuItem.active ? 'main-navigation__item main-navigation__item--active' : 'main-navigation__item';
  return `<a href="#all" class="${classList}">${menuItem.text}</a>`
}

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
    ${menu.map(createNavigationItem).join('')}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
}
