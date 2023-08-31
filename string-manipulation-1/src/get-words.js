/* exported getWords */
function getWords(string) {
  const words = string.split(' ');
  const noWords = [];
  if (words[0] === '') {
    return noWords;
  }

  return words;

  //  probably was supposed to do this a different way when dealing with an empty array/array with no words. Let me know if i need to re-do it. Thanks.
}
