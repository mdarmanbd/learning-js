
let playerName = ['shalom','santo','mahfuz','tushar','mazed','arman'];

console.log (playerName);
playerName[4] = 'rayhan';
console.log (playerName);
console.log (playerName.length);
console.log(playerName[5]);
console.log (playerName[4] = 'arif');
console.log(playerName);

for (let n = 0; n < playerName.length ; n++) { // index : 5; length : 6;
    console.log (playerName[n]); // n = 0; playerName[0] = shalom.                              // n = 1 ; playerName[1] = santo.  
}