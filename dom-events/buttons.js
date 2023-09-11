function handleClick(event) {
  console.log('Button Clicked');
  console.log(event);
  console.log(event.target);
}

const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('Button Hovered');
  console.log(event);
  console.log(event.target);
}
const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Double clicked');
  console.log(event);
  console.log(event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
