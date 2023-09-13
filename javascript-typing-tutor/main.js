function handleKeyDown(event) {
  console.log('Value of event.key:', event.key);

  if (event.key === $spanElements[index]) {
    $spanElements[index].className('selected-letter right-letter');
  } else {
    $spanElements[index].className('selected-letter wrong-letter');
  }
}

const index = 0;

const $body = document.querySelector('body');
const $spanElements = document.querySelectorAll('span');
const $typingText = document.querySelector('.typing-text');
console.log('Value of $spanElemnts', $spanElements);
console.log('Value of $typingText', $typingText);
console.log($spanElements[0]);

$body.addEventListener('keydown', handleKeyDown);
