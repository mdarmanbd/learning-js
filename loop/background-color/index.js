
let colors = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', "0","1","2","3","4","5", "a","b","d","e","f","g","h",];

function mula()
{
    let colorCode = '#';

    for (let i = 1; i <= 6; i++) {
        colorCode = colorCode + colors[Math.round(Math.random() * (colors.length - 1))];
        console.log(colorCode);
    }
    

    document.querySelector('.container').style.backgroundColor  = colorCode;
}

