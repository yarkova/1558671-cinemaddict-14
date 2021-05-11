export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloat =(min, max, hundredth) => {
  min = Math.abs(min);
  max = Math.abs(max);
  hundredth = Math.abs(hundredth);
  if (max < min) {
    [min, max] = [max, min];
  }
  return ((Math.random() * (max - min)) + min).toFixed(hundredth);
};


export const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

   const randomIndex = getRandomInteger (0, descriptions.length - 1);

   return descriptions[randomIndex];

};

export const generateTitle = () => {
  const titles = [
    'Made for Each Other',
    'Santa Claus Conquers the Martians',
    'The Great Flamarion',
    'The Man with the Golden Arm',
    'Popeye the Sailor Meets Sindbad the Sailor',
    'Sagebrush Trail',
    'The Dance of Life',
  ];

  const randomIndex = getRandomInteger (0, titles.length - 1);
  return titles[randomIndex];
};

export const generateImage = () => {
  const images = [
    './images/posters/the-dance-of-life.jpg',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/popeye-meets-sinbad.png',
  ];

  const randomIndex = getRandomInteger (0, images.length - 1);
  return images[randomIndex];
};

export const generateRating = () => {
  const ratings = {
      MIN: 1,
      MAX: 9,
    };

  return getRandomFloat(ratings.MIN, ratings.MAX, 1);
};



export const generateGenre = () => {
  const genres = ['Mystery', 'Drama', 'Comedy'];

  const randomIndex = getRandomInteger (0, genres.length - 1);
  return genres[randomIndex];
};

export const generateText = () => {
  const texts = [
    'Интересная обстановка и хороший состав',
    'Booooooooooring',
    'Очень-очень старый. Мех',
    'Почти два часа? Шутки в сторону?',
  ];
   const randomIndex = getRandomInteger (0, texts.length - 1);
   return texts[randomIndex];
};

export const generateEmotion = () => {
  const emotions = ['smile', 'sleeping', 'puke', 'angry'];
  const randomIndex = getRandomInteger (0, emotions.length - 1);
  return emotions[randomIndex];
};

export const generateAuthor = () => {
  const authors = ['Джон Доу', 'Тим Маковеев', 'John Doe '];
  const randomIndex = getRandomInteger (0, authors.length - 1);
  return authors[randomIndex];
};

 export const generateComment = () => {
  return {
    text: generateText(),
    emotion: generateEmotion(),
    author: generateAuthor(),
  }
}

export const generateComments = () => {
  return new Array(getRandomInteger(0, 20)).fill().map(() => generateComment());;
}

export const generateDate = () => {
  const gap = getRandomInteger(0, 50*365);
  const date = new Date();
  date.setDate(date.getDate() - gap);
  return date;
}

 export const generateFilm = () => {
  return {
    title: generateTitle(),
    image: generateImage(),
    description: generateDescription(),
    rating: generateRating(),
    date: generateDate(),
    duration: '1h 18m',
    genre: generateGenre(),
    comments: generateComments(),
};
};



export const generateFilms = () => {
  return new Array(getRandomInteger(0, 20)).fill().map(() => generateFilm());
};
