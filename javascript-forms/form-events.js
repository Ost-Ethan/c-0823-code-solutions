function handleFocus(event) {
  console.log('Focus event fired');
  console.log('Value of event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('Value of event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of event.target.name:', event.target.name);
  console.log('Value of event.target.value:', event.target.value);
}

const $formUserName = document.querySelector('#user-name');
const $formUserEmail = document.querySelector('#user-email');
const $formUserMessage = document.querySelector('#user-message');

$formUserName.addEventListener('focus', handleFocus);
$formUserName.addEventListener('blur', handleBlur);
$formUserName.addEventListener('input', handleInput);

$formUserEmail.addEventListener('focus', handleFocus);
$formUserEmail.addEventListener('blur', handleBlur);
$formUserEmail.addEventListener('input', handleInput);

$formUserMessage.addEventListener('focus', handleFocus);
$formUserMessage.addEventListener('blur', handleBlur);
$formUserMessage.addEventListener('input', handleInput);
