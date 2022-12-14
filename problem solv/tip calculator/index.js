

let bill = document.getElementById('bill');
let discount = document.getElementById('discount');
let discountAmount = document.getElementById('discountAmount');
let PaidAmount = document.getElementById('PaidAmount');

let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
//    let p =(parseFloat(discount.value));

   discountAmount.value =  (parseFloat(discount.value * bill.value) / 100);
  
     PaidAmount.value = (bill.value - parseFloat(discountAmount.value))
    console.log(PaidAmount.value);

// console.log(typeof( 10 + parseFloat(discountAmount.value)));
});