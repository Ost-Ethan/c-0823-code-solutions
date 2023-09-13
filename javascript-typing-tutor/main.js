function handleKeyDown(event) {
  console.log('Value of event.key', event.key);
  const key = event.key;

  if (key === $spanElements.item(index).textContent) {
    $spanElements.item(index).className = 'right-letter';
    index++;
    $spanElements.item(index).className = 'selected-letter';
  } else {
    $spanElements.item(index).className = 'selected-letter wrong-letter';
  }
}

let index = 0;

const $body = document.querySelector('body');
const $spanElements = document.querySelectorAll('span');
const $typingText = document.querySelector('.typing-text');
console.log('item at  $spanElemnts[0]', $spanElements[0]);
console.log('Value of $typingText', $typingText);
console.log($spanElements[0]);

$body.addEventListener('keydown', handleKeyDown);
