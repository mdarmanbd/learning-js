let audio = null;

for(let i = 0; i<3; i++){
    document.querySelectorAll('.my-button')[i].addEventListener('click',function(){
        if (audio) {
            audio.pause();
        }

        let newAudio = new Audio("audio/"+this.innerHTML+".mp3");
        newAudio.play();
        audio = newAudio;
    })
}