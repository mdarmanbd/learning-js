
let form = document.querySelector('form'); // select the form
let name = form.querySelector('div #name'); // select the id
let email = form.querySelector('div #email'); // select the id
let password = form.querySelector('div #password'); // select the id

form.addEventListener('submit', formHandelar); // add the listener on a form for submit.

function formHandelar(e){
    e.preventDefault(); // remove the refresh on a consol.log
   
    let userInfo = {  // value craet on object.
        name:name.value,  // name value
        email:email.value, // email value
        password:password.value, // password value
    }

    console.log(userInfo);  // print the object

    name.value =''; // form value creat on a empty.
    email.value='';
    password.value='';
}

// resize event.

window.addEventListener('resize', function(){ // window is global variable
    let width = window.outerWidth; // outerwidth is out width
    let height = window.outerHeight // outerheight is out height;
    console.log(`height : ${height}, width : ${width}`); // use the ` ` and dolar sin for focuse the variable.
})


// click event

let buttons = document.querySelectorAll('.btn');
Array.from(buttons).map(myFunction);

function myFunction(fogo){
    fogo.addEventListener('click',function(e){
        console.log(e.target.innerHTML);
    })
}

// Array.from(buttons).map((po)=>{
//     po.addEventListener('click',function(e){
//         console.log(e.target.innerHTML);
//     })
// })
