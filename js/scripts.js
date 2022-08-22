// elements selection
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todolist = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');


//functions
const saveTodo = (text) => {
    const todo = document.createElement('div'); //create div
    todo.classList.add('todo')  //add class "todo" to the div created
    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text; //task title 
    todo.appendChild(todoTitle);

    
    
}


//events
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const inputValue = todoInput.value;  //input value

    if(inputValue) { //validation (no void input)
        saveTodo(inputValue)
    }
})