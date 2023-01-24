


let userInput = $('#userInput');
let passwordInput = $('#passwordInput');
let button = $('#btn');
let showBtn = $('#show');

$(document).ready(function(){

userInput.on('keyup',function(){
    let keyThis = $(this);
    userKeyupFunction(keyThis);
});
userInput.on('click',function(){
    let clickThis = $(this);
     userClickFunction(clickThis);
});
function userClickFunction(clickThis){
    if(clickThis.val() == ''){
        clickThis.addClass('outlineRed').removeAttr('placeholder');
     }else{
        clickThis.removeClass('outlineRed').removeAttr('placeholder');
     }
}

function userKeyupFunction(keyThis){
    if(keyThis.val() == ''){
        keyThis.addClass('outlineRed').removeAttr('placeholder');
    }else{
        keyThis.removeClass('outlineRed').removeAttr('placeholder');
    }
}

passwordInput.on('click',function(){
     let passClick = $(this);
     passClickFunction(passClick);
})

passwordInput.on('keyup',function(){
     let passKeyUp = $(this);
     paskeyUpFunction(passKeyUp);
})

function paskeyUpFunction(passKeyUp){
    if(passKeyUp.val() == ''){
        passKeyUp.addClass('outlineRed').removeAttr('placeholder');
    }else{
        passKeyUp.removeClass('outlineRed').removeAttr('placeholder');
    }
}

function  passClickFunction(passClick){
    if(passClick.val() == ''){
        passClick.addClass('outlineRed').removeAttr('placeholder');
    }else{
        passClick.removeClass('outlineRed').removeAttr('placeholder');
    }
}

showBtn.on('click', function(){
    if('password' == passwordInput.attr('type')){
        passwordInput.prop('type', 'text');
    }else{
        passwordInput.prop('type', 'password');
    }
   
})

function passwordWorning(){

    let inputPassword = passwordInput.val();

    if( passwordInput.val().length < 3 ){
        $('#passWorning').text('password length shold be 3')
        .css({"color": "red", "font-size": "20px"});
        return true;
       
      }
    else if(inputPassword.toLowerCase() == 'password'){
        $('#passWorning').text('password is not a password').addClass('worningMessage');
        return true;
    }  
    else if( inputPassword.indexOf('@') == -1 && inputPassword.indexOf('$') == -1){
        $('#passWorning').text('add the @ or $ for strong').addClass('worningMessage');
        return true;
    }  
    else{
        $('#passWorning').text('');
        return false;
      }
}
function userWorning(){
    if( userInput.val().length < 3 ){
        $('#userWorning').text('error').css('color','red');
        return true;
       
      }else{
        $('#userWorning').text('');
        return false;
      }
}

button.on('click',function(){
    if( userWorning() || passwordWorning()){
        alert('plz put the currect information');
    }else{
        alert('successfuly done');
        userInput.val('');
        passwordInput.val('');
    } 
})

})