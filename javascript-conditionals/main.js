/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const lewis = {
  name: 'Lewis Smith',
  age: 25,
};

const jimmy = {
  name: 'Jimmy John',
  age: 18,
};

const larry = {
  name: 'Larry Lobster',
  age: 14,
};

console.log('value of larry:', larry);
console.log('value of jimmy:', jimmy);
console.log('value of lewis:', lewis);
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  const remainder = number % 2;

  if (remainder === 0) {
    console.log('Yes, this number is Even');
    return true;
  } else {
    console.log('No, this number is Odd');
    return false;
  }
}

function startsWithJ(string) {
  const firstLetter = string.charAt(0);

  if (firstLetter === 'J') {
    console.log('The first letter of the string is J!');
    return true;
  } else {
    console.log('The first letter of the string is ', firstLetter, ', not J.');
    return false;
  }
}
function isOldEnoughToDrink(person) {
  const age = person.age;
  if (age < 21) {
    console.log('You are NOT allowed to drink!');
    return false;
  } else {
    console.log('You are old enough to drink!');
    return true;
  }
}

function isOldEnoughToDrive(person) {
  const age = person.age;

  if (age < 16) {
    console.log('You are not old enough to drive!');
    return false;
  } else {
    console.log('you are old enough to drive!');
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  // 7 is neutral pH, 0 is the lower limit, and 14 is the higher limit. Anything else is invalid
  let validPh;

  if (pH >= 0 && pH <= 15) {
    validPh = pH;
  } else {
    return 'invalid pH';
  }

  if (validPh < 7) {
    return 'The pH is acidic';
  } else if (validPh === 7) {
    return 'The pH is neutral';
  } else if (validPh > 7) {
    return 'This pH is basic';
  }
}

function introduceWarnerBro(name) {
  //  HAS TO BE A SWITCH STATMENT
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";

    case 'dot':
      return 'Im cute~';

    default:
      return 'Goodnight Everybody!';
  }
}

function recommendMovie(genre) {
  // HAS TO BE A SWITCH STATEMENT
  switch (genre) {
    case 'action':
      return 'Terminator';

    case 'comedy':
      return 'Adam Sandler';

    case 'horror':
      return 'Goosebumps';

    case 'drama':
      return 'Mean Girls';

    case 'musical':
      return 'Song Song';

    case 'sci-fi':
      return 'Stargate';

    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
