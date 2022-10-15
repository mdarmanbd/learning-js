

function myRoll() {
 
    let rollNumber = document.getElementById('num1').value;
    // let name = document.getElementById('count').value;
    switch (rollNumber) {

        case ('1') :
            document.getElementById('count').value = 'Abu Rayhan';
           break;

           case ('2') :
            document.getElementById('count').value = 'Abu hena';
            break;

            case ('3') :
                document.getElementById('count').value = 'Abu zayed';
           break;

           case ('4') :
            document.getElementById('count').value = 'akram';
            break;
        
            case ('5') :
                document.getElementById('count').value = 'shofik';
           break;

           default :
           document.getElementById('count').value = 'out off class';
    }
}