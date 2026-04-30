function createNote() {
  const div = document.createElement("div");
  const textArea = document.createElement("textArea");
  textArea.classList.add("note");
  div.append(textArea);
  return div;
}

const noteSection = document.getElementById("noteSection");
const addNoteDiv = document.getElementById("addNote");

addNoteDiv.addEventListener("click", () => {
  const newNote = createNote();
  newNote.addEventListener("dblclick", () => {
    alert("Are you sure deleting This Note?");
    newNote.remove();
  });

  // noteSection.prepend(newNote);
  noteSection.insertBefore(newNote, addNoteDiv);
});
