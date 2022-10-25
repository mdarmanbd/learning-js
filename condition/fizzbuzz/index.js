

function myNumber() {

    let number = document.getElementById('num1').value;
    
    if( number % 3 === 0 && number % 5 === 0) {
        document.getElementById('count').value = ('fizzbuzz');
    }

    else if ( number % 3 == 0){
        document.getElementById('count').value = ('fizz');
    }
    else if ( number % 5 == 0){
        document.getElementById('count').value = ('buzz');
    }
    else{
        document.getElementById('count').value = ( 'not modulas by 3 & 5');
    }
 
}