/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredStrings = [];
  for (let i = 0; i < values.length; i++) {
    const typeOfValue = typeof values[i];

    if (typeOfValue !== 'string') {
      filteredStrings.push(values[i]);
    }
  }
  return filteredStrings;
}
