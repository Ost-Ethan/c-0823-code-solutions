const num1 = 3;
const num2 = 6;
const num3 = 8;

const maximumValue = Math.max(num1, num2, num3);

console.log('Value of maximumValue: ', maximumValue);

const heroes = ['Flash', 'Batman', 'Superman', 'Green Lantern'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex: ', randomIndex); //  Provides a number 0 - 3, which is all 4 array srings. It works.
const randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

const library = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
  },

  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },

  {
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
  },
];

const lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);

const firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

const fullName = 'Ethan Ostrowski';

const firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
