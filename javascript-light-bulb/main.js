function getClickHandler(event) {
  if ($content.className === 'content light-mode-content') {
    $container.className = 'container dark-mode';
    $content.className = 'content dark-mode-content';
  } else {
    $content.className = 'content light-mode-content';
    $container.className = 'container light-mode';
  }
}

const $content = document.querySelector('.content');
const $container = document.querySelector('.container');

$content.addEventListener('click', getClickHandler);
