function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  const area = width * height;
  return area;
}

function getFirstName(person) {
  const name = person.firstName;
  return name;
}

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}

const areaResult = getArea(17, 42);
const greeting = greet('Beavis');
const secondsResults = convertMinutesToSeconds(5);
const firstNameResult = getFirstName({
  firstName: 'Jimmy',
  lastName: 'Johnson',
});
const lastElementResult = getLastElement([1, 2, 3]);

console.log('result of the getArea function:', areaResult);
console.log('result of the greet function:', greeting);
console.log('result of the convertMinutesToSeconds function:', secondsResults);
console.log('result of the getFirstName function:', firstNameResult);
console.log('result of the getLastElement function:', lastElementResult);
