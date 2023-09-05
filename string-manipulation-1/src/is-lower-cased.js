/* exported isLowerCased */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    const checker = word.charAt(i);
    const tester = checker.toLowerCase();

    if (checker !== tester) {
      return false;
    }
  }
  return true;
}
