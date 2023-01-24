


$(document).ready(function(){
    $('#icon').on('click',function(){
       $('#list').fadeToggle();
       ($('#icon').find('i').toggleClass('fa-check').css('transition','0.9s all'));
    })
   
})