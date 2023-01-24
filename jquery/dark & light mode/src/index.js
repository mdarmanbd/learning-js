

$(document).ready(function(){

    //$('span').addClass('fa-solid fa-moon');

    $('#btn').on('click',function(){
        $('body').toggleClass('bg-dark');
        $(this).css('border','1px solid black');

        
        $('#mode').text(
            $('#mode').text() == 'Dark mode' ? 'Light mode' : 'Dark mode'
        )

       // console.log($('button').text(), $('#btn').add('<span class="fa-solid fa-sun"></span>'));
    
        // if ( $('button').text() == 'Dark mode') {
        //     $('button').text('Light mode'); 
        //      $('#icon').toggleClass('fa-sun ');
           
        // } else {
        //     $('button').text('Dark mode');
        //      $('#icon').toggleClass('fa-moon');
           
        // }
        
    });
$('#btn').on('click',function(){
    console.log($(this).find('i').toggleClass('fa-moon'))
    
})
 

})