const nameList = document.querySelector('#user-list');

const nameRequest = new XMLHttpRequest();
nameRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
nameRequest.responseType = 'json';
nameRequest.send();
nameRequest.addEventListener('load', appendNamesToList);
console.log('value of nameRequest:', nameRequest);

function appendNamesToList(event) {
  for (let i = 0; i < nameRequest.response.length; i++) {
    const $liElem = document.createElement('li');
    $liElem.textContent = nameRequest.response[i].name;
    nameList.appendChild($liElem);
  }
}
