const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbersArray = numbers.filter(evenNums);
console.log('Even Numbers:', evenNumbersArray);
const namesWithALetterD = names.filter(dNames);
console.log('No D:', namesWithALetterD);

function evenNums(nums) {
  if (nums % 2 === 0) {
    return true;
  }
}
function dNames(name) {
  if (name.includes('d') || name.includes('D')) {
    return false;
  } else {
    return true;
  }
}
