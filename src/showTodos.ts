import { todos } from "./app";
import { todoOutputElem } from "./todoHtmlElems";




//
export const showTodos = () => {
    const todoItems = todos.map((todo) => {
      const date = new Date(todo.date)
      return `
      <div class="todo_list_output">
      <h2 class="todo_list_output_head">${todo.title}</h2>
      <p class="todo_list_output_description">${todo.description}</p>
      <p class="todo_list_output_date">${date.toDateString()}</p>
      <div class="todo_list_button">
      <button dataset=${
        todo.id
      } class="delete_button js_delete_todo">Delete</button>
      <button dataset=${todo.id} class="edit_button js_edit_todo">Edit</button>
      </div>
      </div>
      `;
    });
    todoOutputElem!.innerHTML = todoItems.toLocaleString().split(",").join("");
  };