
/*
function studenInfo(name,age){
    return{
     name,
     age
    }
}
console.log(studenInfo('arman hossain',30));

*/


let message = {
    body() {
        return 'i am object function';
    }
}
// console.log(message.body());




let newMessage = {
    'new function'(){
        return 'i am new function';
    }
}
// console.log(newMessage['new function']());


// for... of

const names = ['are','hte','gta'];

for(let name of names){
    // console.log(name);
}

const studentId = {
    id : 12,
    name : 'sofiliiogo dosa',
    cgpa : 2.84,
}

for(let p in studentId){
    // console.log(p);  //  only key .
    // console.log(studentId[p]);  // this is key value.
    console.log(`${p} : ${studentId[p]}`); // backtip template, show the key and the key value.
}