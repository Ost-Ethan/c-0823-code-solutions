/* exported getKeys */
function getKeys(object) {
  const keyArray = [];
  for (const keys in object) {
    keyArray.push(keys);
  }
  return keyArray;
}
