/* exported truncate */
function truncate(length, string) {
  let finalString = '';
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      finalString += string[i];
    }
  }
  return finalString + '...';
}
