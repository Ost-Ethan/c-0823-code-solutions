const bookArray = [
  {
    isbn: 1,
    title: 'Book 1',
    author: 'John Johnson',
  },

  {
    isbn: 2,
    title: 'Book 2',
    author: 'Don Johnson',
  },

  {
    isbn: 3,
    title: 'Book Title',
    author: 'Jimmy Johnson',
  },
];

console.log('Value of bookArray:', bookArray);
console.log('typeof bookArray', typeof bookArray);

const jsonBookArray = JSON.stringify(bookArray);

console.log('typeof bookArray after json.stringify', typeof jsonBookArray);

const jsonstring = '{ "id": "123", "name": "Jimmy"}';

console.log('typeof jsonstring', typeof jsonstring);

const stringObject = JSON.parse(jsonstring);
console.log('typeof stringObject', typeof stringObject);
