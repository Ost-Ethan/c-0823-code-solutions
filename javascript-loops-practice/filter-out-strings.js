/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredStrings = [];
  for (let i = 0; i < values.length; i++) {
    const typeOfValue = typeof values[i];

    if (
      typeOfValue === 'number' ||
      typeOfValue === 'null' ||
      typeOfValue === 'object'
    ) {
      filteredStrings.push(values[i]);
    }
  }
  return filteredStrings;
}
