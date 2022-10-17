// add and remove (end of the line).

let playerName = ['shalom','santo','mahfuz','tushar','mazed','arman'];

playerName.push('shihab','al-amin'); // it's add to start end of the line.

console.log (playerName);

playerName.pop ('',); // it's remove to the end of the line.
playerName.pop ('',); // it's remove to the end of the line.

console.log(playerName);

// add and remove (start of the line).

playerName.unshift('manik','rony'); // add to start of line.
console.log(playerName);

playerName.shift(''); // remove to the start of the line.
playerName.shift(''); // remove to the start of the line.
console.log (playerName);
console.log (playerName.length);


console.log(playerName.indexOf('santo')); // find a specik index number .

console.log(playerName.indexOf('mahfuz')); // find a specik index number .


console.log (playerName);

playerName.splice(1,2);

console.log(playerName); // index number 1 from 2 are remove.

playerName.splice(2);

console.log (playerName); // after index number 2, remove all.


let secore = [10,323,45,21,6,34,65,63,21,4,42,53];

console.log(secore.length);

console.log(secore[5]);

let spliceArray = secore.splice(5); // index number-5 include the splice.

console.log (spliceArray); //

console.log(secore); // after splice .