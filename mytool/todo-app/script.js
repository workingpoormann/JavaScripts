class Todo {
  #id = 0;
  #text = "";
  #hour = 0;
  #min = 0;
  #sec = 0;

  constructor(text, hour, min, sec) {
    this.#text = text;
    this.#hour = hour;
    this.#min = min;
    this.#sec = sec;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  toJSON() {
    return {
      id: this.id,
      text: this.#text,
      hour: this.#hour,
      min: this.#min,
      sec: this.#sec,
    };
  }

  static fromJSON(obj) {
    const todo = new Todo(obj.text, obj.hour, obj.min, obj.sec);
    todo.id = obj.id;
    return todo;
  }
}

class TodoManager {
  #todos = [];

  constructor() {
    const rawObject = loadTodos();
    this.#todos = rawObject.map(Todo.fromJSON);
  }

  getTodos() {
    return this.#todos;
  }

  /**
   * Get a todo by id
   * @param {number} id
   * @returns Todo or undefined
   */
  getTodo(id) {
    return this.#todos.find((todo) => {
      return todo.id === id;
    });
  }

  addTodo(text, hour, min, sec) {
    const todo = new Todo(text, hour, min, sec);
    if (this.#todos.length === 0) {
      todo.id = 1;
    } else {
      todo.id = this.#todos.at(-1).id + 1;
    }

    this.#todos.push(todo);
  }

  deleteTodo(id) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}

const todoManager = new TodoManager();

const todoInput = document.getElementById("todoInput");

todoInput.addEventListener("click", (e) => {
  e.preventDefault();

  const text = document.getElementById("todoText").value;
  const hour = Number(document.getElementById("hour").value);
  const min = Number(document.getElementById("minute").value);
  const sec = Number(document.getElementById("second").value);
  console.log(text, hour, min, sec);

  todoManager.addTodo(text, hour, min, sec);
});

/**
  console.log("getTodo", todoManager.getTodo(2));
  todoManager.deleteTodo(4);
  console.log("getAllTodo", todoManager.getTodos());
*/
