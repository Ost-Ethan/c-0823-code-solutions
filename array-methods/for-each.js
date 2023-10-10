const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach(loggerinOrder);
console.log('Reverse Order');
values.forEach(loggerReverseOrder);

// the example in mdn used an arrow function so i wanted to see if a regular one worked.

function loggerinOrder(nums) {
  console.log(nums);
}

function loggerReverseOrder(nums, index) {
  if (index === 0) {
    console.log(values[values.length - 1]);
  } else {
    console.log(values[values.length - index - 1]);
  }
}
