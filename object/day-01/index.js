

let arman = {
    fullName : 'arafat hossain',
    age : '29',
    job : 'unemployment',
    addres : 'dhaka',
}

console.log (arman);
console.log (arman.fullName); // dot notation.
console.log (arman.addres); // dot notation.
console.log (arman['job']); // breaket notation.


arman.ZipCode = 321; // add the new item on a object.
console.log (arman);

arman.education = 'B.Sc';
console.log(arman);

arman.job = 'learing'; // change the item.
console.log (arman);

arman.age = 30;
console.log (arman);
