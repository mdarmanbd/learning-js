

let arman = {
    fullName : 'arafat hossain',
    age : '30',
    locaton : 'dhaka',
}

console.log (arman);

arman.welcome = function () {   // add to function out of object.
    console.log ('hello world');
}



let rayhan = {
    fullName : 'abu rayhan uddain',
    job : 'student',
    location : 'uttara',
    year : function () {  // add to the function on the object.
        console.log ('24 years');
    }
}

console.log (rayhan);

for (item in rayhan) {   // defiend the object item.
    console.log (item);
}

for (item in arman) {  // defiend the object item.
    console.log (item);
}

let badaldiNation = {  // array on the object.
    gameLocation : 'balur matth',
    numberPlayer : 11,
    playerName : ['santo','shalom','rayhan','askar','mahfuz']
}

console.log (badaldiNation);

console.log (badaldiNation.playerName[2]);  // object - array - indexNumber.

console.log (badaldiNation.playerName.length);


let bangladeshTiger = [ // defiend the object on a array.
    'shakib',

    {
        name : 'tamin',
        totalRun : 3002,
        quality : 'good', 
    },

    'world-cup',
]

console.log(bangladeshTiger);
console.log (bangladeshTiger.length);
console.log (bangladeshTiger[1]);
console.log (bangladeshTiger[1].totalRun);
console.log(bangladeshTiger[2]);