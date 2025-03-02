const todoList = [""];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

//1. button to add todo
function addTodo() {
  const inputElement = document.querySelector(".js-name-input"); //selecting the input element
  const name = inputElement.value; //getting the value of the input element

  todoList.push(name);
  // console.log(todoList); //visible on our console (arrays)
  inputElement.value = ""; //clear the input field

  renderTodoList();
}

//LOOPING
