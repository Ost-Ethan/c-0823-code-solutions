function handleClick(event) {
  console.log('Value of event.target:', event.target);
  console.log('Value of event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const $clickedButton = event.target.closest('.task-list-item');

    $clickedButton.remove();
  }
}

const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);
