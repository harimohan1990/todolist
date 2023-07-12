// Selecting necessary elements from the HTML
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Function to create a new to-do item
function createTodoItem(text) {
const item = document.createElement('li');
const todoText = document.createElement('span');
todoText.textContent = text;
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', deleteTodoItem);

item.appendChild(todoText);
item.appendChild(deleteButton);
list.appendChild(item);
}

// Function to handle the form submission
function handleFormSubmit(event) {
event.preventDefault();
const todoText = input.value.trim();
if (todoText !== '') {
createTodoItem(todoText);
input.value = '';
input.focus();
}
}

// Function to delete a to-do item
function deleteTodoItem(event) {
const item = event.target.parentNode;
list.removeChild(item);
}

// Adding event listener to the form
form.addEventListener('submit', handleFormSubmit);