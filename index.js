// Write your code here!
const mainElem = document.querySelector('main');
const body = document.querySelector('body');
body.removeChild(mainElem);

body.innerHTML = "<h1>Meow!</h1>"
const newHeader = body.querySelector('h1');

newHeader.id = 'victory';
newHeader.textContent= 'Hana is the champion';