// elements selection
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;


//functions
const saveTodo = (text) => {

    //Creating div called TODO and passing todo class to it:
    const todo = document.createElement('div'); //create div
    todo.classList.add('todo');  //add class "todo" to the div created

    //Creating a h3 and appending it to the div above:
    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text; //task title; this is the parameter text
    todo.appendChild(todoTitle); 

    //Creating 3 buttons:

    //Creating DONE button
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn)

    //Creating EDIT button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn)

    //Creating DELETE  button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    //Append the TODO div to the main div with id todo-list
    todoList.appendChild(todo);

    
    todoInput.value = ""; //clear the input field when a new task is added
    todoInput.focus(); //focus in the todo field


};

const toggleForms = () => {
    editForm.classList.toggle('hidden');
    todoForm.classList.toggle('hidden');
    todoList.classList.toggle('hidden');


}


//events
//#1 event
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const inputValue = todoInput.value;  //input value

    if(inputValue) { //validation (no void input)
        saveTodo(inputValue)
    }
});

//#1 event
document.addEventListener('click', (e) => { //add click event in the body, and identify the click by the button clicked
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
    let todoTitle;

    if(parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    //add DONE class
    if(targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('done') //add or remove (toggle) the class 'done' to the closest parent div (parentEl)
    }

    //REMOVE div
    if(targetEl.classList.contains('remove-todo')) {
        parentEl.remove();
    }

    if(targetEl.classList.contains('edit-todo')) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
})

cancelEditBtn.addEventListener('click', () => {
    e.preventDefault()

    toggleForms();
})

