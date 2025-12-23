import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
  className={`flex items-center rounded-2xl px-4 py-3 gap-3 shadow-sm transition-all duration-300 border ${
    todo.completed
      ? "bg-green-50 border-green-200" 
      : "bg-pink-50 border-pink-200"
  }`}
>
  <input
    type="checkbox"
    className="w-5 h-5 cursor-pointer accent-pink-500 rounded-full"
    checked={todo.completed}
    onChange={toggleCompleted}
  />

  <input
    type="text"
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
    className={`flex-1 bg-transparent text-pink-800 font-medium outline-none rounded px-2 ${
      todo.completed ? "line-through text-green-600" : ""
    } ${isTodoEditable ? "border border-pink-300 px-2" : "border-transparent"}`}
  />

  <button
    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
      todo.completed
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-pink-200 text-pink-700 hover:bg-pink-300"
    }`}
    onClick={() => {
      if (todo.completed) return;
      if (isTodoEditable) editTodo();
      else setIsTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
    aria-label={isTodoEditable ? "Save" : "Edit"}
  >
    {isTodoEditable ? "✅" : "✏️"}
  </button>

  <button
    className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 flex items-center justify-center transition-colors"
    onClick={() => deleteTodo(todo.id)}
    aria-label="Delete"
  >
    ❌
  </button>
</div>
  );
}

export default TodoItem;