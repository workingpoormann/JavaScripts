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

  get todoId() {
    return this.#id;
  }

  set todoId(id) {
    this.#id = id;
  }
}
