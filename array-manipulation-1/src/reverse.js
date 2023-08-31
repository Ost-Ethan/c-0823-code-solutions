/* exported reverse */
function reverse(array) {
  const reversedArray = [];
  let stagedElement = [];
  for (let i = 0; i < array.length; i++) {
    stagedElement = array[array.length - 1 - i];
    reversedArray.push(stagedElement);
  }

  return reversedArray;
}
