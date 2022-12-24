

let selectFontSize = document.querySelector('#selectFontSize');
let selectBackground = document.querySelector('#selectBackground');
let button = document.querySelector('button');
let main = document.querySelector('main');


selectFontSize.addEventListener('change', changeFont);
selectBackground.addEventListener('change', changeBg);

function changeFont(event){
    let fontSizes = event.target.value ;
    main.style.fontSize = fontSizes;
    main.style.lineHeight = '50px';
};

function changeBg(event){
    let changeBg = event.target.value;
    main.style.background = changeBg;
};

button.addEventListener('click', function(){
    main.style.fontSize = '19px';
    main.style.background = 'grey';
})
