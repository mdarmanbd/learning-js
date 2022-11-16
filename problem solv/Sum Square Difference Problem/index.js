
// (1^2 + 2^2 + 3^3 = A) ?
// (1+2+3)^2 = B ;?
// B - A = C; ?


function number(x){
   let a = 0;
   let b = 0;
   for(let i = 1; i <= x; i++){
      a += Math.pow(i,2); // a = 1,5,14;
      b += i; // 1,3,6;
   }
   b = Math.pow(b,2); // b= 36;
   a = b - a;
   return a;
}

console.log(number(3));