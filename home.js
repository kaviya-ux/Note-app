
let notes = [];

function addNote() {
    let noteInput = document.querySelector("textarea");
    let noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please enter a note!");
        return;
    }

    notes.push(noteText);
    displayNotes();

    noteInput.value = "";
}

function displayNotes() {
    let notesContainer = document.querySelector(".notes-list");

    notesContainer.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        let note = document.createElement("div");

        note.textContent = notes[i];
        note.style.padding = "10px";
        note.style.margin = "10px 0";
        note.style.backgroundColor = "#f0f0f0";
        note.style.borderRadius = "5px";

        notesContainer.appendChild(note);
    }
}

function clearAll() {
    notes = [];
    displayNotes();
}
