

let slider = document.querySelectorAll('.slider');
let count = 1;
setInterval(() => {
    count++
   let currentElemant = document.querySelector('.current');
   currentElemant.classList.remove('current');
   if(count > slider.length){  // 2 > 3 (f)
    slider[0].classList.add('current');
    count = 1;
   }
   else{
    currentElemant.nextElementSibling.classList.add('current');
   }
  
   
}, 2000);