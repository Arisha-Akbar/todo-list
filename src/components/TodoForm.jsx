import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add} className="flex gap-2">
  <input
    type="text"
    placeholder="Write a todo..."
    className="flex-1 rounded-full px-5 py-3 bg-pink-50 border border-pink-200 text-pink-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
  />
  <button
    type="submit"
    className="bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-full px-5 py-3 transition-colors duration-200 shadow-sm hover:shadow-md"
  >
 Add
  </button>
</form>
  );
}

export default TodoForm;