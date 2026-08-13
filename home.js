function addNote(){

    let input = document.getElementById("noteInput");
    let text = input.value.trim();

    if(text === ""){
        alert("Please enter a note.");
        return;
    }

    let note = document.createElement("div");

    note.className =
    "bg-blue-100 p-3 rounded-lg flex justify-between items-center";

    note.innerHTML = `
        <p class="text-gray-700">${text}</p>

        <button
            onclick="deleteNote(this)"
            class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
        </button>
    `;

    document.getElementById("notes").appendChild(note);

    input.value = "";

}

function deleteNote(button){

    button.parentElement.remove();

}

function clearNotes(){

    document.getElementById("notes").innerHTML = "";

}

function addNote(){

    let input = document.getElementById("noteInput");
    let text = input.value.trim();

    if(text === ""){
        alert("Please enter a note.");
        return;
    }

    let today = new Date();

    let date = today.toLocaleDateString();

    let time = today.toLocaleTimeString();

    let note = document.createElement("div");

    note.className =
    "bg-blue-100 p-4 rounded-lg shadow";

    note.innerHTML = `
        <p class="text-gray-800 font-medium">${text}</p>

        <p class="text-sm text-gray-500 mt-2">
            📅 ${date} &nbsp;&nbsp; ⏰ ${time}
        </p>

        <button
            onclick="deleteNote(this)"
            class="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Delete
        </button>
    `;

    document.getElementById("notes").appendChild(note);

    input.value = "";

}
