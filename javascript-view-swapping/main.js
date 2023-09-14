const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

function handleClick(event) {
  if (event.target.matches('.tab')) {
    const $dataViewEventTarget = event.target.getAttribute('data-view');

    for (let i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }

    for (let i = 0; i < $viewElements.length; i++) {
      if ($viewElements[i].getAttribute('data-view') === $dataViewEventTarget) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
    }
  }
}
$tabContainer.addEventListener('click', handleClick);
