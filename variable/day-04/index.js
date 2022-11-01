

// assinment operator.

/*
let a = 5;

a += 2;
console.log(a); 

a -=5 ;
console.log(a);

a *= 10 ;
console.log(a);

a /= 2 ;
console.log(a);

a %= 7 ;
console.log (a);

*/
//conditional operator;

/*
let x = 30;
let y = 30;
let p = (x==y);
let z = ( x <= y ? 900 : 200);
console.log("z : " + (z));

let r = "sfasf";
let n = '';
console.log (typeof(z));
console.log((typeof(r)));
console.log((typeof(p)));
console.log (p);
*/

/*
let myVillage = "badaldi";
let myAge = 30 ;
let myName = "arman";

if (myName === "arman") {
    console.log("i am " + myName);
}
if (myVillage === "badaldi") {
    console.log( "vilage: "+ myVillage);
}

if ( myAge == 10 ) {
    console.log ("my age is : " + myAge);
}

if ( myAge >= 18) {
    console.log ("i am adult");
}

if ( myAge < 18) {
    console.log ("i am not adult");
}
*/

/*
let myAge = 29 ;

if (myAge > 18) {
    console.log ("you are adult");
}

else {
    console.log ("you are not adult");
}
*/



function myWeek() {
    let weekName = document.getElementById('day').value;


    if (weekName === 'saturday'){
        document.getElementById('count').value = ('day : 1');
    }

    else if (weekName === 'sunday'){
        document.getElementById('count').value = ('day : 2');
    }

    else if (weekName === 'monday'){
        document.getElementById('count').value = ('day : 3');
    }
    else if (weekName === 'tuesday'){
        document.getElementById('count').value = ('day : 4');
    }
    else if (weekName === 'wednesday'){
        document.getElementById('count').value = ('day : 5');
    }
    else if (weekName === 'thursday'){
        document.getElementById('count').value = ('day : 6');
    }
    else if (weekName === 'friday'){
        document.getElementById('count').value = ('day : 7');
    }
    else {
        document.getElementById('count').value = weekName ;
    }
}