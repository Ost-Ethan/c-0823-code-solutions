/* exported toObject */
function toObject(keyValuePair) {
  // Looking for an array that has 2 elements, a 'string' key and a value

  const combinedObject = {};
  combinedObject[keyValuePair[0]] = keyValuePair[1];
  console.log('Value of combinedObject:', combinedObject);

  return combinedObject;
}
