

let hoto = [10,20,40,50,6,8,9,3];

let newArray = hoto.map(function(x){  // map make on a new array. (no condition )
    return x*x ;
})
console.log(newArray);

let lastArray = hoto.filter(function(p){ // filter indicate on a condition
    return p>=10;
})
console.log(lastArray);