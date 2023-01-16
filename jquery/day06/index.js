





// Hoisting 
/*
$('.btn').on('click',abc($(this)));
function abc(e){
    console.log( e.data('num'));
}
*/

let screenValue = '';
let screen = $('.screen');

$('.btn').on('click',function(e){
  let dataNumber = ($(this).data('num')); 
    screenValue += dataNumber; 
    screen.val(screenValue);
})

$('.equal').on('click', function(){
    if(screen.val() === ''){
        screen.val(null);
    }
    else{
       let ans = eval(screen.val());
       screen.val(ans);
    }
})

$('.clear').on('click',function(){
    screen.val(screenValue = '');
})

$('.delet').on('click',function(){
    let presentValue = screen.val();
    
   if(presentValue !=''){
    
    screen.val(presentValue.slice(0,-1));
    
   
   }
    
   
    
    // screen.val(screenValue.slice(0, -1))
})



/*
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
*/