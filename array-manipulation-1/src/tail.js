/* exported tail */
function tail(array) {
  const tailArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}
