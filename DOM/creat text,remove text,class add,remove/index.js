
// creat a new text .

let heading1 = document.createElement('h1');  // creat the element
let text = document.createTextNode('hello world'); // creat a new text

heading1.appendChild(text); // creat a perant child relation
 
let myDiv = document.getElementById('my-div'); // find id or class name 

let a = myDiv.appendChild(heading1); // creat a perant child relation

// a.style.color = 'red'; // chang the color 
// a.innerHTML = 'good morning'; // chang the text 

let heading2 = document.getElementsByTagName('h1')[1]; // find the element
 myDiv.removeChild(heading2); // remove the on the perant 

  let pera2 = document.createElement('p'); // creat a element
  let text1 = document.createTextNode('this peragrap two'); // creat a text
  let newLine = pera2.appendChild(text1); // creat a perant child relation
  let p3 = document.getElementsByTagName('p')[1]; // find a tagName and index numbre
  myDiv.insertBefore(newLine, p3); //(new element, before element add name) add the new line and find a tagname andslso index number before an add. 

  
let calssName = document.getElementById('my-div').classList; // see the class list
console.log(calssName);
let calssName2 = document.getElementById('my-div').classList.add('class3'); // add the class
console.log(calssName2);
let calssName3 = document.getElementById('my-div').classList.add('class4');
console.log(calssName3);
let calssName4 = document.getElementById('my-div').classList.remove('class3'); // remove the class
console.log(calssName4); 

