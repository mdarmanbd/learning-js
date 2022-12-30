

const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form');
const inputTodo = document.querySelector('#inputTodo');
const addTodoButton = document.querySelector('#addTodoButton');
const todoLists = document.getElementById('lists');
const message =  document.getElementById('message');

const showMessage = (text, status) =>{
    message.textContent = text;
    message.classList.add(`${status}`);
    setTimeout(()=>{
        message.textContent = '';
        message.classList.remove(`${status}`);
    },1000);
}


const createTodo = (todoId,todovalue) =>{
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add('list-style');
    todoElement.innerHTML = `<span> ${todovalue} </span> <span>
    <button class="btn" id="deletButton"> <i class="fa-solid fa-trash"></i> </button>
    </span>  ` ;
    todoLists.appendChild(todoElement);
    const deletButton = todoElement.querySelector('#deletButton');
    deletButton.addEventListener('click', deleteTodo);
}

const deleteTodo = (e) =>{
    const selectedTodo = e.target.parentElement.parentElement.parentElement;
    todoLists.removeChild(selectedTodo);
    showMessage('todo is deleted','bg-danger');

}

const addtodo = (event) =>{
    event.preventDefault();
    const todovalue = inputTodo.value;

    const todoId = Date.now().toString();
    createTodo(todoId, todovalue);
    showMessage('todo is added', 'bg-success');
}

todoForm.addEventListener('submit', addtodo);




