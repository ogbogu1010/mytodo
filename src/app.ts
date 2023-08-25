import { ITodo } from "./interface/ITodo";
import { showTodos } from "./showTodos";
import {
  createTodoButtonElem,
  todoDateElem,
  todoDescriptionElem,
  todoTitleElem,
} from "./todoHtmlElems";
import {
  getTodoDate,
  getTodoDesc,
  getTodoTitle,
  todoDate,
  todoDescription,
  todoTitle,
} from "./todoValues";
import { formateDate } from "./utility/dateFormater";

//
const localStorageTodos = localStorage.getItem("todos") as string;

export let todos: ITodo[] = JSON.parse(localStorageTodos) ?? [];
let todoId: number | string;

console.log(todos);
//
const handleCreateTodo: EventListener = (event: Event): void => {
  if (
    !todoTitleElem?.value ||
    !todoDateElem?.value ||
    !todoDescriptionElem?.value
  ) {
    alert("Sorry you have not filled all the todo information");
  } else {
    const createdTodoIndex = todos.findIndex((todo) => todo.id === todoId);
    const randomId = Math.floor(Math.random() * 10000);
    //
    const todo = {
      id: randomId,
      title: todoTitle,
      date: todoDate,
      description: todoDescription,
    };
    //
    createdTodoIndex === -1
      ? todos.push(todo)
      : todos.splice(createdTodoIndex, 1, todo);

    // save to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
    //
    showTodos();
  }
  //
  todoTitleElem!.value = "";
  todoDateElem!.value = "";
  todoDescriptionElem!.value = "";

  //
  deleteAndEditEventListener();
};

const deleteAndEditEventListener = () => {
  //
  const todoDeleteButtonElems =
    document.querySelectorAll<HTMLButtonElement>(".js_delete_todo");

  //
  const todoEditButtonElems =
    document.querySelectorAll<HTMLButtonElement>(".js_edit_todo");

  todoDeleteButtonElems?.forEach((todoDeleteButton: HTMLButtonElement) =>
    todoDeleteButton.addEventListener("click", handleDeleteTodo)
  );

  //
  todoEditButtonElems?.forEach((todoEditButton: HTMLButtonElement) =>
    todoEditButton.addEventListener("click", handleEditTodo)
  );
};

// deletes a single todo list
const handleDeleteTodo: EventListener = (event: Event) => {
  const deleteButton = event.target as HTMLButtonElement;
  const todoId = deleteButton.getAttribute("dataset");
  //
  const remainingTodos = todos.filter((todo) => todo.id !== Number(todoId));
  todos = remainingTodos;
  localStorage.setItem("todos",JSON.stringify(todos));
  showTodos();
  deleteAndEditEventListener();
};

// edits a single todo
const handleEditTodo: EventListener = (event: Event): void => {
  const editButton = event.target as HTMLButtonElement;
  todoId = Number(editButton.getAttribute("dataset"));
  //
  const editedTodo = todos.find((todo) => todo.id === Number(todoId));

  //
  if (editedTodo) {
    //
    todoTitleElem!.value = editedTodo.title;
    todoDateElem!.value = formateDate(editedTodo.date);
    todoDescriptionElem!.value = editedTodo.description;
  }
};

//
showTodos();

//
deleteAndEditEventListener();

// event listeners
todoTitleElem?.addEventListener("change", getTodoTitle);
todoDateElem?.addEventListener("change", getTodoDate);
todoDescriptionElem?.addEventListener("change", getTodoDesc);
createTodoButtonElem?.addEventListener("click", handleCreateTodo);
