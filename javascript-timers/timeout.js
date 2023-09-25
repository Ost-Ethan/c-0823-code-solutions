const $message = document.querySelector('.message');

setTimeout(changeTextAfterDelay, 2000);

function changeTextAfterDelay() {
  $message.textContent = 'Hello There!';
}
