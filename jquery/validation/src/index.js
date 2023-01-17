
   let blog = $('#blog');
   let author = $('#author');
   let number = $('#number');
   let email = $('#email');
   let btn = $('#btn');
   let success = true;

$(document).ready(function(){

    function emailValue(){
        if(email.val().indexOf('@') == -1 || email.val().length < 6){
            $('#emailWrong').text('requard a correct email').addClass('worningMassage');
            return true;
        } else{
            $('#emailWrong').text('');
            return false;
        }
    }
    function authorValue(){
        if(author.val().length <= 3){
            $('#authorWorng').text('name is requard').addClass('worningMassage');
            return true;
        }else{
            $('#authorWorng').text('');
            return false;
        }
    }

    function blogValue(){
        if(blog.val().length < 2 || blog.val().length > 20){
            $('#blogWorning').text('Text has to be between 2 & 20 characters long').addClass('worningMassage');
           return true;
        }else{
            $('#blogWorning').text('');
           return false;
        }
    }
    function checkNumber() {
        if(number.val().length != 2){
            $('#numberWrong').text('number is requard').addClass('worningMassage');
            return true;
        }else{
            $('#numberWrong').text('');
           return false;
        }
    }


    $('#btn').on('click',function(){
        if(blogValue() || checkNumber() || authorValue() || emailValue() ){ // onle one condition when true , thats the true condition;
            alert('erro');
        } else {
            alert('submit successfully');
        }
    })
   
});


