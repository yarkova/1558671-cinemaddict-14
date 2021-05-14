import '../mock/film.js'

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
