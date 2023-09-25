let counterInterval = setInterval(imageTimeSwitch, 3000);
let currentListedPicture = 1;
const $pictureBulletList = document.querySelector('.bullet-list');
const $selectedImage = document.querySelector('#selected-image');
const $bulletElementList = document.querySelectorAll('.bullet');
const pictureArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
$pictureBulletList.addEventListener('click', pictureSwapHandler);

// called when the dot of a picture is clicked, and passes the picture number to the renderer
function pictureSwapHandler(event) {
  switch (event.target.getAttribute('id')) {
    case '1':
      renderPicture(1);
      break;
    case '2':
      renderPicture(2);
      break;
    case '3':
      renderPicture(3);
      break;
    case '4':
      renderPicture(4);
      break;
    case '5':
      renderPicture(5);
      break;
  }
}

// Switch the image if 3 seconds has passed.
function imageTimeSwitch() {
  currentListedPicture++;

  if (currentListedPicture > 5) {
    currentListedPicture = 1;
  }
  bulletfilled(currentListedPicture);
  renderPicture(currentListedPicture);
}

// render the given picture based on pictureNMum
function renderPicture(pictureNum) {
  bulletfilled(pictureNum);
  $selectedImage.setAttribute('src', pictureArray[pictureNum - 1]);
  currentListedPicture = pictureNum;
  clearInterval(counterInterval);
  counterInterval = setInterval(imageTimeSwitch, 3000);
}

const $pictureContainer = document.querySelector('.picture-container');
$pictureContainer.addEventListener('click', handleNextPicture);

// handle clicking the arrows to switch the pictures and conditionals to keep the pictures from bugging when arrows are spam clicked
function handleNextPicture(event) {
  if (event.target.getAttribute('id') === 'back') {
    if (currentListedPicture > 1) {
      currentListedPicture--;
      renderPicture(currentListedPicture);
    } else {
      currentListedPicture = 5;
      renderPicture(currentListedPicture);
    }
  }
  if (event.target.getAttribute('id') === 'forward') {
    if (currentListedPicture < 5) {
      currentListedPicture++;
      renderPicture(currentListedPicture);
    } else {
      currentListedPicture = 1;
      renderPicture(currentListedPicture);
    }
  }
}

// Fill the bullet points based on what picture is active
function bulletfilled(currentNumber) {
  for (let i = 0; i < $bulletElementList.length; i++) {
    if (String(currentNumber) !== $bulletElementList[i].getAttribute('id')) {
      $bulletElementList[i].setAttribute(
        'class',
        'fa-regular fa-circle bullet'
      );
    } else {
      $bulletElementList[i].setAttribute('class', 'fa-solid fa-circle bullet');
    }
  }
}
