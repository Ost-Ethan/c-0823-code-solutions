const textInterval = setInterval(changeTextCountdown, 900);

const $countdownDisplay = document.querySelector('.countdown-display');
function changeTextCountdown() {
  switch ($countdownDisplay.textContent) {
    case '4':
      $countdownDisplay.textContent = '3';
      break;

    case '3':
      $countdownDisplay.textContent = '2';
      break;

    case '2':
      $countdownDisplay.textContent = '1';
      break;

    case '1':
      $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(textInterval);
      break;
  }
}
