

let totalAttempts = 5;
let attempts = 0;
let totalwon = 0;
let totalLost = 0;


let cardBody = document.querySelector('.card-body');
let form = document.querySelector('form');
let guessingNumber = form.querySelector('#guessingNumber');
let checkButton = form.querySelector('#check');
let resultText = cardBody.querySelector('.resultText');
let message = document.createElement('p');  // 4
let remainingAttempts = cardBody.querySelector('.remainingAttempts');

form.addEventListener('submit',function(event){  // 1
    event.preventDefault();
    attempts ++; // 5
    if(attempts === totalAttempts){
        checkButton.disabled = true;
        guessingNumber.disabled = true;
    }
    else{
        let guessNumber = Number(guessingNumber.value); // 2,6
        checkResult(guessNumber);  // 2,6
        remainingAttempts.innerHTML = `remaining attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value = '';
})

function checkResult(guessingNumber){  // 3
    const randomNumber = getGuessingNumber(5);
    if(guessingNumber === randomNumber){
        resultText.innerHTML = `you have won`;
        totalwon ++;
    }
    else{
        resultText.innerHTML = `you have lost ; random number was : ${randomNumber}`;
        totalLost ++;
    }
    message.innerHTML = `won : ${totalwon}, lost : ${totalLost}`;
    message.classList.add('large-text');
    cardBody.appendChild(message);
}
function getGuessingNumber(limit){  // 2
   return (Math.floor(Math.random() * limit) + 1);
}

