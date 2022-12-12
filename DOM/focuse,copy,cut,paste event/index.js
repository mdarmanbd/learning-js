


let inpute = document.querySelector('input');


inpute.addEventListener('blur',(e)=>{   // when focus is finished then it work
    // console.log(e.target.value);
    inpute.style.backgroundColor = 'transparent';
    inpute.style.padding = '0px';
    let a = e.target.value.toUpperCase();
    console.log(a);
})

inpute.addEventListener('focus',(e)=>{   
    // console.log(e.target.value);
    inpute.style.backgroundColor = 'tomato';
    inpute.style.padding = '20px';
});

// inpute.addEventListener('focusin',()=>{
//     console.log('focus in');
// })

// inpute.addEventListener('focusout',()=>{
//     console.log('focus out');
// })

let newLine = document.querySelector('#new');
let text = document.querySelector('p');

newLine.addEventListener('copy',()=>{
    text.innerHTML = 'copy text';
})

newLine.addEventListener('cut',()=>{
    text.innerHTML = 'cut text';
})

newLine.addEventListener('paste',()=>{
    text.innerHTML = 'paste text';
})