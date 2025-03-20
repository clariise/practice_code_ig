const todoList = []; //array of strings

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; //destructuring
    const html = `
    <div>${name} </div>
    <div>${dueDate}</div>  
      <button class="delete-todo-button" onclick = "
        todoList.splice(${index}, 1); // 1 is the number of elements to remove while i is the index
        renderTodoList();
      ">Delete</button>
    `; //generating the HTML for each todo
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

//1. button to add todo
function addTodo() {
  const inputElement = document.querySelector(".js-name-input"); //selecting the input element
  const name = inputElement.value; //getting the value of the input element

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  if (name === "" || dueDate === "") {
    alert("Please enter a task and select a due date.");
    return;
  }

  todoList.push({
    name,
    dueDate,
  }); //adding the value to the array
  // console.log(todoList); //visible on our console (arrays)
  inputElement.value = "";
  dateInputElement.value = ""; //clear the input field

  renderTodoList();
}

//LOOPING
