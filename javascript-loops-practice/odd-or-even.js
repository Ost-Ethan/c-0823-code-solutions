/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const remainder = numbers[i] % 2;
    if (remainder !== 0) {
      newArray.push('odd');
    } else {
      newArray.push('even');
    }
  }

  return newArray;
}
