function clickHandlerOpen(event) {
  $modalState.className = 'container modal modal-shown';
}

// I could've crammed some if elses to make this work but i think the seperate functions look nicer

function clickHandlerClose(event) {
  $modalState.className = 'container modal modal-hidden';
}

const $openModelButton = document.querySelector('.open-modal');
const $noButton = document.querySelector('.no-button');
const $modalState = document.querySelector('.modal');

$openModelButton.addEventListener('click', clickHandlerOpen);
$noButton.addEventListener('click', clickHandlerClose);
