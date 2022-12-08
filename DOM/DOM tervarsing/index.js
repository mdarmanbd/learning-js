
/*

let firstId = document.querySelector('#my-div'); // find the perant id
let firstClass = firstId.querySelector('.pera1'); // find and select the child class
console.log(firstClass);
let secondClass = firstId.querySelector('.new'); // find and select the child class
console.log(secondClass);

let child1 = firstId.children[1]; // find and select the 1 number index
console.log(child1);
let child0 = firstId.children[0]; // find and select the 0 number index
console.log(child0);
*/

/*
let a = document.querySelector('.pera1'); // find the child element
let perant = a.parentElement; // find the perant element
console.log(perant);
let x = perant.children[1]; // find and select childer index number
console.log(x);
*/


let firstClass = document.querySelector('.pera1'); // find the class
let nextClass = firstClass.nextElementSibling; // find the next class 
console.log(nextClass);

let secondClass = document.querySelectorAll('p')[1]; // select all p tag then find the index 1
let firstC = secondClass.previousElementSibling; // find the previous index 0
console.log(firstC);


