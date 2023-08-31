/* exported isUpperCased */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    const checker = word.charAt(i);
    const tester = checker.toUpperCase();

    if (checker !== tester) {
      return false;
    }
  }
  return true;
}
