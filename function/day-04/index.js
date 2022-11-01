
/*
function sentence (longSentence){
  let sentenceSplit = longSentence.split(" "); // sentenceSplit = 'shh', 'ewr', 'dfois', 'gsf';
  let longWord = 0;
  for (let i = 0; i < sentenceSplit.length; i++){ // i = 0; i<4; i++;

    if(sentenceSplit[i].length > longWord){ // 1 > 0 ;

      longWord = sentenceSplit[i].length; // longWord = sentenceSplit[0].length; longWord = 3;
      
    }
    
  }
  return longWord;
}

console.log(sentence('shh ewr dfois gsf'));
*/

/*

function largestWord(sentence){
  let newSentence = sentence.split(' ');
   let bigWord = '';
 
  let word = 0;
for (let i = 0; i< newSentence.length; i++){
  if(newSentence[i].length > word){
    word = newSentence[i].length;
    bigWord = newSentence[i];
  
  }
  
}

  console.log(bigWord);
// console.log(newSentence[3].length);
}


largestWord('this is our country Bangladesh');

*/


for (let i = 1; i<100; i++){  // i = 1 2 3 4 5

  if( i%2 == 1) { // i = 1 2 3 4 5
    document.write(i + '</br>'); // i = 1 3 5
  }
   
  }
