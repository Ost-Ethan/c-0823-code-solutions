/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(?)
  const unique = []; // 1 * 1 = O(?)
  for (
    let i = 0; // 1 * 1 = O(2n) O(n)
    i < words.length; // 2 * n = O(?)
    i++ // 2 * n = O(?)
  ) {
    const word = words[i]; // 2 * n = O(?)
    if (!seen[word]) {
      // 2 * n = O(?)
      seen[word] = true; // _ * _ = O(?)
      unique[unique.length] = word; // 2 * n = O(?)
    }
  }
  return unique; // 1 * 1 = O(?)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(?)
  for (
    let i = 0; // 1 * 1 = O(?)
    i < words.length; // 2 * n = O(?)
    i++ // 2 * n = O(?)
  ) {
    const word = words[i]; // 2 * n = O(?)
    let isUnique = true; // 1 * n = O(?)
    for (
      let c = 0; // 1 * n = O(?)
      c < i; // 1 * n^2 = O(?)
      c++ // 2 * n^2 = O(?)
    ) {
      const comparing = words[c]; // 2 * n^2 = O(?)
      if (comparing === word) {
        // 1 * n^2 = O(?)
        isUnique = false; // 1 * n^2 = O(?)
      }
    }
    if (isUnique) {
      // 1 * n = O(?)
      unique[unique.length] = word; // 2 * n = O(?)
    }
  }
  return unique; // 1 * 1 = O(?)
} // Big O Notation for uniqueQuadratic: O(?)
