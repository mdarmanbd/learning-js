
/*
let newArray = [10,20,40,50];

newArray.forEach(newFunction)

function newFunction(x){
   console.log(x);
}
*/

/*
let newArray = [10,20,40,50];

newArray.forEach(function(x){
   console.log(x);
})
*/

/*
let number = [3,5,6,5];
let numberSquar = [];
number.forEach(function(i){
   numberSquar.push(i*i); 
})
console.log(numberSquar);
*/

let number = [1,4,3,6,8];
let numberSubtraction = [];
number.forEach(function(x,index,array){
  numberSubtraction.push(array[index] = x+5);
})
console.log(numberSubtraction);