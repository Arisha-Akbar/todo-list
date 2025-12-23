
# Todo App – React Context + LocalStorage

A lightweight, responsive to-do application built with **React**, leveraging the **Context API** for state management and **localStorage** for data persistence.

---

## ✨ Features

- **Add, edit, delete, and mark tasks as complete**
- **Persistent storage**: Todos are saved to `localStorage` and restored on page reload
- **Fully responsive UI** built with **Tailwind CSS**
- **Context API**: Centralized state management without external libraries
- **Clean, accessible interface** with smooth user interactions

---

## 🛠️ Tech Stack

- **React 18+** (Functional components, Hooks)
- **React Context API** for global state
- **localStorage** for client-side persistence
- **Tailwind CSS** for styling
- **Vite** (or Create React App) – adaptable to common React setups

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev    # if using Vite
   # or
   npm start      # if using Create React App
   ```

4. Open [http://localhost:5173](http://localhost:5173) (or your configured port) to view the app.

---

## 🧠 Architecture Overview

- The `TodoProvider` component wraps the app and manages:
  - State (`todos`)
  - CRUD operations (`addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`)
  - Synchronization with `localStorage` on every state change
- All child components consume todo state and actions via `useContext`
- No external state libraries (e.g., Redux, Zustand) — pure React solution

---

## 💾 Data Persistence

Todos are automatically:
- **Saved** to `localStorage` whenever the state changes
- **Loaded** from `localStorage` on initial render (with fallback to empty array)

> Note: Data is stored under the key `'todos'`. Clearing browser storage will reset the app.


---

> A minimal, educational project demonstrating React Context and client-side persistence.
