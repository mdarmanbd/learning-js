



let a = "mohammod arman hossain";
let b = a.includes("ain"); // return the true and false.
console.log(b);

let string = 'The rain in SPAIN stays mainly in the plai';
let newStr = string.indexOf('in'); // first match index number . if no match return -1.
console.log(newStr);

let sentence = 'The rain in SPAIN stays mainly in the plai';
// let newSen = sentence.match(/ain/gi); // show all match,
// let newSen = sentence.match(/ain/g); // show only same thing match
let newSen = sentence.match(/ain/); // show first match and fiest match index number.
console.log(newSen);