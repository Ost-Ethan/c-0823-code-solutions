/* exported toObject */
function toObject(keyValuePair) {
  // Looking for an array that has 2 elements, a 'string' key and a value
  // const value = keyValuePair[0];
  // console.log("Value of value:", value);

  // const key = keyValuePair[1];
  // console.log("Value of key:", key);

  const combinedObject = keyValuePair[0];
  combinedObject[keyValuePair[1]] = keyValuePair[1];
  console.log('Value of combinedObject:', combinedObject);

  return combinedObject;
}
