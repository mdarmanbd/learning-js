
/*
function myName(nam){
  let x =  nam.charAt(0).toUpperCase();
  let y = nam.slice(1);

  let z = (x + y); 
  console.log(z);
}

myName('arman');

*/

function factor(number){  // number = 5;
  if (number === 0 || number === 1){ // number = 5;
    if (number === 0){
      return 0;
    }
    else{
      return 1;
    }
  }
  
  for (let i = (number -1); i >= 1; i--){ // number = 5;  i = 4, i >= 1, i--;
    number*=i; // number = 5*4*3*2*1; number = 120;
   
  }
  return number; // return 120;
}

console.log(factor(5));