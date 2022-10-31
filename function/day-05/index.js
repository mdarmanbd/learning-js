
/*
function myNumber(){
   let x = Number(document.getElementById('total').value);
  let sum = 0;
  
   for (let i = x; i>0; i--){
   
         sum = sum + i;
        
         document.write(sum + ' ');
   }
}
*/
/*
function newNumber(num){
   let x = [num];
   console.log(x);
}

newNumber(4,5,6,7);
*/

// let x = [2,4,6, 69];

// a = x[0];
// b = x[1];
// c = x[2];

// e = (a + b + c);

// f = (e / (x.length));

// console.log(f);

/*
let a = [10,20,30,60,20];
let sum = 0; // sum = 0
for (let x = 0; x<a.length; x++){ 
   sum = sum + a[x]; // sum = 10,20,30
}
let p = (sum / a.length);
   console.log(p);

*/

/*
let x = [1,3,-6,5,-6,9,10,-55];

for (let a = 0; a<x.length; a++){
   p = x[a];
   if(p>0){
      console.log(p);
   }
}
*/

/*
let x = [10,1,2,5,10,2,1,2,5];
let p = 0;
for (let a = 0; a<x.length; a++){
   if(x[a].length == x.length){
     
   }
   
}
*/

function myNumber(){
   let x = Number(document.getElementById('total').value);
   let y = [20,40,60,70,90, 20];
   let count = 0;
   let index = null;


   // x = 20 count = 0, index = null

   for(let a = 0; a < y.length; a++){
     if (y[a] === x) { // 20 === 20
         count++; // count = 2, index = 0
         index = a; // count = 2, index = a = 5
     }
   }
   document.write(x+' -> '+ count + ' -> '+index);

}

