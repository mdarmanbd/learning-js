



$('h1').text('i am js'); // $ = document.quarySelector; .text() = change the text;

$('#firstId p').html('<b>this is bold peragrap </b>') ; // .html()= change the text with tag;

$('#secondID h2').append(' good bye all'); // .append()= add the text on an end of the line.

$('#secondID .day').prepend(' Have a '); // .prepend()= add thex start the line.

let afterText = $('<h3></h3>').text('add the line after the have a good day'); // creat the heading3 & add the text.
$('#secondID .day').after(afterText); // add the afterText after the .day class.

let beforeText = $('<h2></h2>').text('add the line before the day'); // creat the heading2 & add the text.
$('#firstId p').before(beforeText);  // add the beforeText before the p tag.
