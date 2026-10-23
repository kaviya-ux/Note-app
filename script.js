
const noteForm = document.getElementById("noteForm");
const noteTitle = document.getElementById("noteTitle");
const noteDescription = document.getElementById("noteDescription");
const notesContainer = document.getElementById("notesContainer");
const emptyMessage = document.getElementById("emptyMessage");

// Get saved notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display all notes
function displayNotes() {
    notesContainer.innerHTML = "";

    emptyMessage.style.display =
        notes.length === 0 ? "block" : "none";

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        const noteCard = document.createElement("div");
        noteCard.className = "note";

        const title = document.createElement("h3");
        title.textContent = note.title;

        const description = document.createElement("p");
        description.textContent = note.description;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";

        editButton.addEventListener("click", function () {
            editNote(note.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function () {
            deleteNote(note.id);
        });

        noteCard.appendChild(title);
        noteCard.appendChild(description);
        noteCard.appendChild(editButton);
        noteCard.appendChild(deleteButton);

        notesContainer.appendChild(noteCard);
    }
}

// Add a new note
noteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = noteTitle.value.trim();
    const description = noteDescription.value.trim();

    if (title === "" || description === "") {
        alert("Please enter both title and description.");
        return;
    }

    const newNote = {
        id: Date.now(),
        title: title,
        description: description
    };

    notes.push(newNote);

    saveNotes();
    displayNotes();

    noteForm.reset();
});

// Save notes in localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Edit a note
function editNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            const newTitle = prompt(
                "Enter new title:",
                notes[i].title
            );

            if (newTitle === null) return;

            const newDescription = prompt(
                "Enter new description:",
                notes[i].description
            );

            if (newDescription === null) return;

            if (newTitle.trim() === "" ||
                newDescription.trim() === "") {
                alert("Title and description cannot be empty.");
                return;
            }

            notes[i].title = newTitle.trim();
            notes[i].description = newDescription.trim();

            saveNotes();
            displayNotes();
            return;
        }
    }
}

// Delete a note
function deleteNote(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this note?"
    );

    if (confirmDelete === false) {
        return;
    }

    const updatedNotes = [];

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id !== id) {
            updatedNotes.push(notes[i]);
        }
    }

    notes = updatedNotes;

    saveNotes();
    displayNotes();
}

// Show existing notes when the page opens
displayNotes();

