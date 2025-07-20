# WQ Browser - Version 1 (Electron)

A minimal, keyboard-focused single-window browser built using Electron. Inspired by the productivity and layout of tools like VS Code, this browser offers tab management via shortcuts, a clean UI, and command-palette-style vertical tab navigation.

---

## 🚀 Features

- 🔗 Lightweight single-window browser
- 🧭 Simple URL navigation
- 🧩 Vertical tab bar toggle with `Alt + P`
- 🗂 Add new tabs with `Alt + B`
- 🔄 Switch tabs with `Alt + J` / `Alt + K`
- 🧠 Keyboard-first workflow (address bar auto-focus coming in next version)
- 🎯 Inspired by VS Code’s minimal design

---

## 📦 Project Structure

browser-one/
├── main.js # Electron main process
├── preload.js # Secure preload bridge
├── shortcuts.js # Renderer keyboard shortcut handler
├── registerShortcuts.js # Global shortcuts registered in main process
├── index.html # UI layout and styles
├── styles.css # (optional) External styles (linked in index)
├── renderer.js # Handles tab rendering and webview logic
├── package.json # Electron app config
└── public/
└── index.html # HTML UI (served by Electron window)

yaml
Copy
Edit

---

## 🧪 Keyboard Shortcuts

| Shortcut        | Action                          |
|----------------|----------------------------------|
| `Alt + B`      | Open a new tab                  |
| `Alt + J`      | Switch to previous tab          |
| `Alt + K`      | Switch to next tab              |
| `Alt + P`      | Toggle vertical tab popup       |
| `Ctrl + R`     | Reload the current window       |
| `F11`          | Toggle fullscreen mode          |
| `Ctrl + W`     | Close the browser window        |

> **Note**: Currently, keyboard shortcuts only work reliably when the address bar is focused. This will be resolved in future versions (v2+).

---

## 🛠 How to Run

1. **Install dependencies:**

   ```bash
   npm install
Start the app:

bash
Copy
Edit
npm start
Requires Node.js and Electron to be installed.

📌 Known Limitations
Keyboard shortcuts stop working after focusing the webview due to Electron's input event limitations.

ESC-to-focus-address-bar is not yet reliable.

All tabs share the same webview (no process isolation or sandboxing).

📃 License
MIT License – free for personal and commercial use.
