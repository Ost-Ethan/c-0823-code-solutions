/* exported initial */
function initial(array) {
  const initialArray = [];
  const lengthOffset = array.length - 1;
  for (let i = 0; i < lengthOffset; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
