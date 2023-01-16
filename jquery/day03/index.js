
/*
$('button').on('click',function(){  // add the addEventLiseaner 
    $('h1').text('i clicked the button');
})
*/

/*
$('.btn').click(function(){ // add the addEventLiseaner 
    let value = this.innerHTML;
    $('h1').text(value + ' , i clicked');
})
*/

/*
$('.btn').on('mouseover',function(){ // add the addEventLiseaner 
    let value = this.innerHTML;
    $('h1').text(value + ', mouse over');
})
*/

$('.btn').click(function(e){
    e.preventDefault();

   let input1 = ($('#input1').val());
   let input2 = ($('#input2').val());

   if( input1 != '' && input2 != ''){
        if(input1 == input2){
            alert('successfuly match');
        }else{
          let alarm = $('#p1').text('plz match the password');
          alarm.addClass('mycolor');
        }

   }else{
        alert('put the password');
   }
})