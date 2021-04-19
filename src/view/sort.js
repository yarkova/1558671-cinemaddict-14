export const createSortTemplate = () =>{
  const sort = [{
    text: 'Sort by default',
    href: '#',
    active: false
  },{
    text: 'Sort by date',
    href: '#',
    active: false
  },
  {
    text: 'Sort by rating',
    href: '#',
    active: true
  }
  ];

  const createSortButton = (sortButton) => {
    const classList = sortButton.active ? 'sort__button sort__button--active' : 'sort__button';
    return `<a href="#" class="${classList}">${sortButton.text}</a>`
  }

  return `<ul class="sort">
  ${sort.map(createSortButton).join('')}`;
}
