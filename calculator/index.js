

let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

buttons.forEach(function(button){
    button.addEventListener('click',function(a){
        let sine = a.target.dataset.num;
        screen.value += sine;
    });
});

equal.addEventListener('click',function(b){
    
   

    if(screen.value === ''){
        screen.value = null ;
    }

    else{
        let ans = eval(screen.value);
        screen.value = ans;
    }
});

clear.addEventListener('click', function(c){
    screen.value = '';
});