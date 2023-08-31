/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) {
      // console.log();
    } else {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}
