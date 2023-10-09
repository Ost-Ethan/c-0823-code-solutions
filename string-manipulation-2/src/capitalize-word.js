/* exported capitalizeWord */
function capitalizeWord(word) {
  let lowercaseWord = word.toLowerCase();
  let firstLetter = lowercaseWord.charAt(0);
  if (lowercaseWord === 'javascript') {
    lowercaseWord = 'JavaScript';
  }

  firstLetter = firstLetter.toUpperCase();
  const returnWord = firstLetter + lowercaseWord.substring(1);
  return returnWord;
}
