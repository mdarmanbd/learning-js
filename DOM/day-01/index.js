
// innerHTML use for chnage the text.


document.getElementById('heading1');


document.getElementById('heading1').innerHTML = 'hello world'; // innerHTML use for change a text. 
console.log(document.getElementById('heading1'));

let myHeading = document.getElementById('heading1');
myHeading.innerHTML = 'hii';

let myHeading2 = document.getElementById('heading2');
myHeading2.innerHTML = 'goodbye  goodbye';

let tagName = document.getElementsByTagName('p')[0]; // []: this is tag index number.
tagName.innerHTML='hello world';

let tagName1 = document.getElementsByTagName('p')[2]; 
tagName1.innerHTML='beautiful world';

let newPera = document.getElementsByClassName('new')[2];  // change the P tage use the index number.
newPera.innerHTML = 'this is new line';

let newPera2 = document.getElementsByClassName('new')[0];  // change the P tage use the index number.
newPera2.innerHTML = 'this is new line';