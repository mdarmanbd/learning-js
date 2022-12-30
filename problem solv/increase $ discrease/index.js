
let count = 0;
let value = document.querySelector('#span');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(function(buttns){
    buttns.addEventListener('click',function(e){
        let findClass = (e.target.classList);
        if(findClass.contains('increase')){
            count++;
            if(count>0){
                value.style.color='green';
            }
        }
        else if(findClass.contains('decrease')){
            count--;
            if(count<0){
                value.style.color='red';
            }
        }
       else{
            count = 0;
            if(count === 0){
                value.style.color='green';
            }
       }
        value.textContent = count;
    })
})