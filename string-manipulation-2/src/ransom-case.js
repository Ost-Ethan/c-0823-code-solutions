/* exported ransomCase */
function ransomCase(string) {
  let returnString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      returnString += string.charAt(i).toUpperCase();
    } else {
      returnString += string.charAt(i).toLowerCase();
    }
  }
  return returnString;
}
