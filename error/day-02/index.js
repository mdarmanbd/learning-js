


document.querySelector('#button').addEventListener('click',function(){
   let num = document.querySelector('#num').value;

   try{
    if(num > 10){
        throw('this number long length') // throw is a eddid the error & it throw the error on a catch peramiter
    }
    else if(num < 1){
        throw('this number is too short')
    }
    else{
        throw('this number is perfact')
    }
   } catch(err){
    console.log(err);
   }
   
})