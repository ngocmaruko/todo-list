const todoList = [];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach((todo,i) => {
    todoListHTML += `
    <div>${todo.name}</div>
    <div>${todo.date}</div>
    <button class="delete-todo" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button> 
  `;
  });

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodoList() {

  const inputDateElement = document.querySelector('.js-date');
  const inputElement = document.querySelector('.js-todo-name');

  todoList.push({
      name: inputElement.value,
      date: inputDateElement.value
    });
  
  inputElement.value = '';

  renderTodoList();

}

function handleKeydown (event) {
  if(event.key === "Enter"){
    addTodoList();
  }
}