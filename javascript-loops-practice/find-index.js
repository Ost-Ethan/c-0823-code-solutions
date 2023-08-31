/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    const checker = array[i];
    if (checker === value) {
      return i;
    }
  }
  return -1;
}
