

let colors = ['0','1','e','f','g','h','j','2','3','4','5','6','7','a','b','c','d'];

function backgroundBtn() {
    let firstCode = '#';

    for (let x = 1; x<=6; x++) {

        firstCode = firstCode + colors[Math.round (Math.random() * (colors.length - 1))];
    }

    document.querySelector('.text-box').style.backgroundColor = firstCode;
    
   
}


function textBtn() {
    let firstCode = '#';

    for (let y=1; y<=6; y++){

        firstCode = firstCode + colors[Math.round (Math.random() * (colors.length - 1))];
        console.log(firstCode);
    }

    document.querySelector('.text-color').style.color = firstCode;
    
}

