# 📝 Notes App

A clean and simple web-based notes application that lets you quickly jot down, timestamp, and manage your notes — built with **HTML, Tailwind CSS, and vanilla JavaScript**.

## 🔗 Repository

[https://github.com/kaviya-ux/Note-app](https://github.com/kaviya-ux/Note-app)


## ✨ Features

- ✏️ Add notes instantly from a simple text area
- 📅 Every note is automatically timestamped with the **date and time** it was added
- 🗑️ Delete individual notes with one click
- 🧹 Clear all notes at once
- 🚫 Input validation — prevents adding empty notes
- 💻 Fully responsive, two-panel UI powered by **Tailwind CSS**
- ⚡ Zero dependencies — pure HTML, CSS, and JavaScript

## 🖥️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| Tailwind CSS (CDN) | Styling and layout |
| JavaScript (Vanilla) | Note creation, deletion, and DOM handling |


## 🚀 Getting Started

### Prerequisites

No installation or build tools required — this is a static, single-file web app.

### Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/kaviya-ux/Note-app.git
   ```
2. Navigate into the project folder
   ```bash
   cd Note-app
   ```
3. Open `index.html` in your browser
   ```bash
   open index.html   # macOS
   start index.html  # Windows
   ```

That's it — no server or dependencies needed.

## 🧩 How It Works

1. Type a note into the text area on the left panel.
2. Click **Add Note** to save it.
3. The app automatically captures the current **date and time** and attaches it to the note.
4. The note appears as a card in the **My Notes** panel on the right, complete with its timestamp.
5. Click **Delete** on any note card to remove that specific note.
6. Click **Clear All** to remove every note at once.
7. If you try to add an empty note, an alert prompts you to enter some text first.

## 📁 Project Structure

```
├── index.html      # Main application file (HTML + CSS + JS)
└── README.md        # Project documentation
```

## 🛠️ Possible Improvements

- [ ] Persist notes using `localStorage` so they survive a page refresh
- [ ] Add note editing functionality
- [ ] Add search/filter for notes
- [ ] Add categories or color tags for notes
- [ ] Add dark mode toggle
- [ ] Add drag-and-drop note reordering

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kaviya**
- GitHub: [@kaviya-ux](https://github.com/kaviya-ux)

---

⭐ If you found this project useful, consider giving it a star on GitHub!
