
let a = document.querySelector('.pera'); // . class name
a.innerHTML='change the value';

let b = document.querySelector('#first'); // # id name
b.innerHTML = 'change the value 2';

let c = document.querySelector('h2'); // tag name
c.innerHTML = 'change the value 3';

let d = document.querySelector('li a'); // child change
d.innerHTML = 'chnage the child';

let e = document.querySelector('li .second'); // child change
e.innerHTML = 'chnage the new child';

let f = document.querySelectorAll('.all')[1]; // select all class , and [] is index number.
f.innerHTML = ' chnage the peragraph';