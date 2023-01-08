

const form = document.querySelector('form');
const inputText = document.querySelector('#inputText');
const addButton = document.querySelector('.btn');
const cardBody = document.querySelector('.card-body');
const addMessage = cardBody.querySelector('#message');
const addList = cardBody.querySelector('#lists');


form.addEventListener('submit',function(e){
  e.preventDefault();
    addText();
});

function addText(text){
  let itemName = inputText.value;
    // addMessage.classList.add('itemStyle');
    // addMessage.textContent = itemName;
    let creatElement = document.createElement('li');
    creatElement.classList.add('itemStyle');
    creatElement.innerHTML = itemName;
    addList.appendChild(creatElement);
   
    // groceryElemet();
 
}

// function  groceryElemet(){

//   let groceryList = itemName;
//   let creatElement = document.createElement('li');
//   creatElement.classList.add('itemStyle');
//   creatElement.innerHTML = groceryList;
//   addList.appendChild(creatElement); 
// }