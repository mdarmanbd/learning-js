
/*

let color = document.getElementById('color');

color.addEventListener('input',function(){
    let container = document.getElementById('container');
    container.style.background = color.value; 
    
})

*/

let body = document.querySelector('body');
let click = document.querySelector('#click');
let color = '#';

click.addEventListener('click',function(){
    let hexaColor = ['a','b','c','0','1','2','3'];
    for(let i = 0; i<6; i++){
        let number1 = Math.round(Math.random()*hexaColor.length);
        let number2 = hexaColor[number1];
        color += number2;
        console.log(color);
    }
    body.style.background = color;

    color = '#';
});


