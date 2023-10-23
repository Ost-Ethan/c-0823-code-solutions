import takeAChance from './take-a-chance.js';

const newPromise = takeAChance('Ethan')
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
