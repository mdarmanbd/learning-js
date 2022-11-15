



function validation() {
    let name = document.getElementById('name').value;
    let error_message = document.getElementById('error_message');
    if(name.length < 5){
        error_message.innerHTML = '*name length should be more then 4';
        
    }
    else{
        error_message.innerHTML = ' ';
    }
  }

  function validation2() {
    let email = document.getElementById('email').value;
    let error_message2 = document.getElementById('error_message2');
   if(email.indexOf('@') == -1 || email.length < 4){
    error_message2.innerHTML = '*please enter a vaild mail';
   }
   else{
    error_message2 = ' ';
   }
  }

  function validation3(){
    let last_name = document.getElementById('last_name').value;
    let error_message3 = document.getElementById('error_message3');
    if(last_name.length < 5){
        error_message3.innerHTML = '*name length should be more then 4';
        
    }
    else{
        error_message3.innerHTML = ' ';
    }
  }
  function validation4(){
    let subject = document.getElementById('subject').value;
    let error_message4 = document.getElementById('error_message4');
    if(subject.length < 5){
        error_message4.innerHTML = '*name length should be more then 4';
        
    }
    else{
        error_message4.innerHTML = ' ';
    }
  }
  function validation5(){
    let comments = document.getElementById('comments').value;
    let error_message5 = document.getElementById('error_message5');
    if(comments.length < 50){
        error_message5.innerHTML = '*name length should be more then 50';
        
    }
    else{
        error_message5.innerHTML = ' ';
    }
  }
  