/* exported capitalize */
function capitalize(word) {
  let capitalizedWord = '';

  for (let i = 0; i < word.length; i++) {
    let currentCharacter = word.charAt(i);
    if (i === 0) {
      currentCharacter = currentCharacter.toUpperCase();
      capitalizedWord += currentCharacter;
    } else {
      currentCharacter = currentCharacter.toLowerCase();
      capitalizedWord += currentCharacter;
    }
  }
  return capitalizedWord;
}
