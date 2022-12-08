
let x = document.querySelectorAll('.mybutton').length;

for(let i = 0; i < x; i++){
   document.querySelectorAll('.mybutton')[i].addEventListener('click',function(){
        let text = this.innerHTML;
        document.querySelector('h1').innerHTML= text + ' is here';
    })
}

