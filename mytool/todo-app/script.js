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
}

class TodoManager {
  #todos = [];

  constructor() {
    // load todos from locastorage
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
