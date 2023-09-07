/* exported getValues */
function getValues(object) {
  const valueArray = [];
  for (const keys in object) {
    const value = object[keys];
    valueArray.push(value);
  }
  return valueArray;
}
