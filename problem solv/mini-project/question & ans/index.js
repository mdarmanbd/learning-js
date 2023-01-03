

const btns = document.querySelectorAll('.btn');
const ans = document.querySelectorAll('.ans');

function toggle() {
    ans.forEach(item => item.classList.add('d-none'));
}

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        toggle();
        const text = e.target.parentElement.parentElement.parentElement;
        const findAns = text.querySelector('.ans');
        findAns.classList.toggle('d-none');
    })
})

