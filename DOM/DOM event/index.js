

/*
let inpute = document.querySelector('inputr[name=name]');
console.log(inpute);
inpute.addEventListener('change', changeHandel); 

function changeHandel(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target); // target full change tage
    console.log(e.target.className); // target the class
    console.log(e.target.id); // target the id
    console.log(e.target.value); // target inpute value
    
}
*/

/*
let program = document.querySelectorAll('input[name=program]');

Array.from(program).map((myFunction) => {
    myFunction.addEventListener('change',programHandel)
})

function programHandel(e){
   if(e.target.value == 'c'){
    console.log("goos hottw");
   }
   if(e.target.value == 'java'){
    console.log("pogo heater");
   }
  
}
*/

let department = document.querySelector('#department')
department.addEventListener('change',departmentHandel);
 function departmentHandel(e){
    console.log(e.target.value);
 }