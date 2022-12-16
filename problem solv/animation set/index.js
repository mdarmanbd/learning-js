

for(let i = 0; i<3; i++){
    document.querySelectorAll('.my-button')[i].addEventListener('click',function(){
        let text = this.innerHTML;
        
        // palyAudio(text);
        // playAnimation(text);
    })
}
document,addEventListener('keypress',function(event){   // add the keypress lisener.
    let text = event.key;
    console.log(text);
    palyAudio(text);
    playAnimation(text);
})

function palyAudio(text){
    switch(text){
        case 'a' :{
            let audio1 = new Audio('audio/happy-1.mp3');
           audio1.play();
           break;
        }
        case 'b' :{
            let audio2 = new Audio('audio/happy-2.mp3');
           audio2.play();
           break;
        }
        case 'c' :{
            let audio3 = new Audio('audio/happy-3.mp3');
           audio3.play();
           break;
        }
    }
}



function playAnimation(text){
    let myButton = document.querySelector('.'+text);
    myButton.classList.add('animation');

    setTimeout(function(){
        myButton.classList.remove('animation');
    }, 1000);
}