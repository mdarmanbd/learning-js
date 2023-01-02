

const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const card = document.querySelector('.card');
const aModol = document.querySelector('.amodol');
const bModol = document.querySelector('.bmodol');
const closeBtn = document.querySelector('.closeBtn');

button.addEventListener('click',function(){
    container.style.background = 'gold';

    aModol.classList.add('d-none');
    bModol.classList.remove('d-none');
   
    // displayNone.classList.add('d-block');
    // if(displayBlock.classList.contains('d-block')){
    //     displayBlock.classList.add('d-none');
    // }
    // if (displayNone.classList.contains('d-none')){
    //     displayNone.classList.remove('d-none');
    // }
    
});

closeBtn.addEventListener('click',function(){
    container.style.background = 'red';
   bModol.classList.add('d-none');
   aModol.classList.remove('d-none');
})



// close.addEventListener('click',function(){
//     if(card.classList.contains('card')){
//         card.classList.add('d-none');
//     }
// })