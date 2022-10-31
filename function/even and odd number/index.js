

/*
for (let i = 1; i <=10; i++){
  let x = 9 * i;
  document.write( '9 x ' + i + '=' + ' '+  x + '</br>');
}
*/


/*
function number(namota){
  
  for (let i = 1; i<=10; i++){
    let x = namota * i;
    document.write( namota +'&nbsp'+ 'x' + '&nbsp' + i+ '&nbsp' + '=' + ' '+  x + '</br>' );
  }

}

number(7);
*/


/*
function myNumber(){

  let a = document.getElementById('num1').value;
 
  for (let i = 1; i<=10; i++){
    let x = a * i;
    document.write( a +'&nbsp'+ 'x' + '&nbsp' + i+ '&nbsp' + '=' + ' '+  x + '</br>' );
  }

}

*/



function myNumber(){
  let a = document.getElementById('num1').value;

  for(let i = (a-1); i>0; i--){

    
    document.write(i);

    
  }
  
}
