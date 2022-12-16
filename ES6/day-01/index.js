
/*
function message(text = 'today is indipanded day'){
    console.log(`${text}`);
}
message();
message('hello bangladesh');
*/


/*
function myNumber(x,y, ...z){
    console.log(`${x}, ${y},${z}`);
}
myNumber(12,43,76,43,09,12,8,76,90);
*/



// spread operator

function addNumber(x,y,z){
    return x + y + z;
}

let number1 = [1,2,3];
console.log(addNumber(...number1));  // spread 

let a = [1,2,3,4];
let b = [5,6,7];

let c = [...a,...b]; // spread array
console.log(c);

console.log(8,9, ...b, 56); // spread

// spaed object

let man1 = {
    name:'arman',
    age:30,
}

let man2 = {
    sex: 'mail',
    education:'B.Sc',
}

let pesrson = {...man1, ...man2};
console.log(pesrson);