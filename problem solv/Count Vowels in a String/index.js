

// charAt() define a position (value) in a string.

/*
function myFunction(sentence){
    let newSentence = sentence.toString();
   
    let count = 0;
    for(let i = 0; i<=(newSentence.length - 1); i++){
        if (newSentence.charAt(i)==='a' || newSentence.charAt(i) === 'e' || newSentence.charAt(i) ==='i' || 
        newSentence.charAt(i) === 'o' || newSentence.charAt(i) === 'u') // i = 0,1,2,3,4,5,6;
         {
            count += 1; // count = 1,2,3,4,5,5,6;
            // count = 6;
        }
    }
    return count; // count = 6;
}

console.log(myFunction('the world is grow day by day'));
*/

/*
function mySentence(sentence){
    let newSentence = sentence.toString();
  let countVowles = 0;
  
  for (let i = 0; i <= (newSentence.length - 1); i++){
   
    if( sentence.charAt(i) === 'a' || sentence.charAt(i) === 'e' || 
    sentence.charAt(i) === 'i' || sentence.charAt(i) === 'o' ||sentence.charAt(i) === 'u')
    {
        countVowles += 1; 
       
    }
    
  }
  console.log( 'total vowles : ' + countVowles);
  
}

mySentence ('education is a backbond of nation');
*/

/*
function newLine(x){
    let line = x.match(/[aeiou]/gi);
    return line === null ? 0 : x.length;

}

console.log(newLine('zsaffoiudsa'));
*/

function line(a){
    let sentence = a.match(/ain/g); // g mean the onle same diget, / /gi bujay boro oo chutu hater sob eksathe.
    console.log(sentence);
    console.log(sentence.length);
}

line('The rain in SPAIN stays mainly in the plain')
