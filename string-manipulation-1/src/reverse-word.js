/* exported reverseWord */
function reverseWord(word) {
  let reversedWord = '';
  for (let i = 0; i < word.length; i++) {
    const reverseCount = word.length - 1;
    const letter = word.charAt(reverseCount - i);
    reversedWord += letter;
  }

  return reversedWord;
}
