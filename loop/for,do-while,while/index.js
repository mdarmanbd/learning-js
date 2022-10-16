


// for loop 

// for (let a = 2; a < 10; a++){
//     console.log ("my roll number : " + a);
// }


// let num = 10 ;

// do {
//     console.log("inside the loop : " + num );
//     num ++ ;
// } while (num < 20);

/*
let pro = 50;

while ( pro < 10 ){
    console.log("inside the loop : " + pro );
    pro ++;
}

console.log ("out side the loop");
*/

for (let a = 1; a < 10; a++){
    console.log (a);

    if( a === 5 ){ // when 5 loop is break.
        console.log("when 5 ,loop is break ");
        break;
    }
    console.log ('break the loop ' + a);
}


for (let x = 0 ; x < 5; x++){

    if( x === 3){ // when it's 3 ,it's continue the loop.
        console.log ('jogo');
        continue;
        console.log('jkj');
    }
    console.log (x);
}

