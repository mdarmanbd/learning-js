

function myNumber() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let number3 = document.getElementById('num3').value;

    if (number1 > number2 && number1 > number3){
        document.getElementById('count').value = number1;
    }

    else if (number2 > number1 && number2 > number3){
        document.getElementById('count').value = number2;
    }

    else {
        document.getElementById('count').value =('higest number : ' + number3);
    }
}