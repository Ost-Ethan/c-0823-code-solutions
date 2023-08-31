/* exported countdown */
function countdown(number) {
  const countDownArray = [];

  while (number >= 0) {
    countDownArray.push(number);
    number--;
  }
  return countDownArray;
}
