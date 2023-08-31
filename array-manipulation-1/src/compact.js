/* exported compact */
// This fucntion omits null, nan, false, 0, and -0, undeifned, and empty strings.
// It also "maintains order of truthy elements" which means we dont remove and replace into the array.
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
