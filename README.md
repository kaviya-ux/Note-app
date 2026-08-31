# 📝 Notes App

A clean and simple web-based notes application that lets you quickly jot down, timestamp, and manage your notes — built with **HTML, Tailwind CSS, and vanilla JavaScript**.

##  Features

-  Add notes instantly from a simple text area
-  Every note is automatically timestamped with the **date and time** it was added
-  Delete individual notes with one click
-  Clear all notes at once
-  Input validation — prevents adding empty notes
-  Fully responsive, two-panel UI powered by **Tailwind CSS**
-  Zero dependencies — pure HTML, CSS, and JavaScript

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| Tailwind CSS (CDN) | Styling and layout |
| JavaScript | Note creation, deletion, and DOM handling |


##  How It Works

1. Type a note into the text area on the left panel.
2. Click **Add Note** to save it.
3. The app automatically captures the current **date and time** and attaches it to the note.
4. The note appears as a card in the **My Notes** panel on the right, complete with its timestamp.
5. Click **Delete** on any note card to remove that specific note.
6. Click **Clear All** to remove every note at once.
7. If you try to add an empty note, an alert prompts you to enter some text first.

##  Possible Improvements

- [ ] Persist notes using `localStorage` so they survive a page refresh
- [ ] Add note editing functionality
- [ ] Add search/filter for notes

⭐ If you found this project useful, consider giving it a star on GitHub!
