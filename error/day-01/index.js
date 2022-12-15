
try{   // code test

    alert('hello everyone');

    alert(d);   // error 

    
    
    alert('good night dhaka');
}
catch(error){  // error handel
    console.log(error);  // show the error
    console.log(error.name); // show the error name
    console.log(error.message); // show the error message
}
finally{   // this is always runable ; error er pore oo run korbe.
    alert('good morning dhaka');
}
