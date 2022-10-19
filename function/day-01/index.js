

function myNumber (a , b) {
    let sum = a + b ;
    return sum;
}
console.log(myNumber (4,6)); // return sum : 10;
console.log(myNumber (5,7)); // return sum : 12;



function myDetals(name,age) {
    console.log ("my name is " + name + " and i am " + age);
}
myDetals('arman' , 30);



function myName(name , callback){ // name : abu hayder ali , callback : hello.
    let myAge = 40 ; // callback : hello .
    callback(myAge); // callback : 40, hello : (40);
    console.log('hello i am ' + name);
}

function hello(age){ // hello (40), age : 40; it's new function.
    console.log('i am ' + age);
}
myName('abu hayder ali', hello);




function welcome(name) { // name : kari based,
    console.log('i love ' + name); // name : kari based,
    return function option (mahadi){ // mahadi : kari mahadi, return to the new function.
        console.log('i love also '+ mahadi); // mahadi : kari mahadi.
    }
}
welcome('kari based') ('kari mahadi');




function changeNumber(a){
    console.log ('second value is :' + a); // 2nd read. a : 200;
     a = 10 ;
    console.log('thired value is :' + a); // 3rt read. a : 10;
    return a;   // return value is : 200;
}
let a = 200 ;
console.log ('first value is : ' + a); // 1st read. a : 200;
changeNumber(a);
console.log('four value is : ' +a); // 4th read. a (return value) : 200;