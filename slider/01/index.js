
/*
let digit = ['asset/imges/01.jpg','asset/imges/03.jpg','asset/imges/04.jpg'];

let selected = 0;

document.getElementById('slide').innerHTML = digit[selected]; // digit[0]
*/


/*
let digit = ['a','b','c'];
let selected = 0;
function priv() {
    if (selected > 0) { // 0 > 0,
        selected = selected - 1; //selec = -1;
    } else {
        selected = digit.length - 1; //selec = 3-1;
    }
    document.getElementById('slide').innerHTML = digit[selected]; 
    
}

function next() {
    if (selected < digit.length - 1) {
        selected = selected + 1;
    } else {
        selected = 0;
    }
    document.getElementById('slide').innerHTML = digit[selected]; 
}
*/
/*
function priv() {
    if (selected > 0) {
        selected = selected - 1;
    }

    document.getElementById('slide').innerHTML = digit[selected]; 
    
}

function next() {
    if (selected < digit.length - 1) {
        selected = selected + 1;
    }

    document.getElementById('slide').innerHTML = digit[selected]; 
} */

/*
function priv() {
    if (selected > 0) {
        selected = selected - 1;
    } else {
        selected = digit.length - 1;
    }
    document.getElementById('slide').innerHTML = digit[selected]; 
    
}

function next() {
    if (selected < digit.length - 1) {
        selected = selected + 1;
    } else {
        selected = 0;
    }
    document.getElementById('slide').innerHTML = digit[selected]; 
}

setInterval(function() {
    if (selected < digit.length - 1) {
        selected = selected + 1;
    } else {
        selected = 0;
    }
    document.getElementById('slide').innerHTML = digit[selected]; 

}, 1000);

*/


let digit = ["asset/imges/01.jpg","asset/imges/03.jpg","asset/imges/04.jpg"];

let imgTag = document.getElementById("slide");
let selected = 0;

function priv() {
    if (selected > 0) { // selc = 0 > 0; f
        selected = selected - 1; // sel = 0 - 1; -1;
    } else {
        selected = digit.length - 1; // sel = 3 - 1; sel = 2;
    }
    document.getElementById('slide').src = digit[selected]; // sel = 2; digit[2];
    
}

function next() {
    if (selected < digit.length - 1) {  // 0 < 3-1 ; T
        selected = selected + 1; // selc = 0 + 1; selc = 1;
    } else {     // 
        selected = 0;
    }
    document.getElementById('slide').src = digit[selected]; // sel = 1; digit[1]; 
}