export const randomWords = require('random-words');

export let array = randomWords({
  exactly: 15,
  wordsPerString: 8,
  separator: ' ',
});

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
