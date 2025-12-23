import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
  <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen py-12 px-4">
    <div className="max-w-md mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-pink-200">
        <h1 className="text-2xl font-bold text-center text-pink-700 mb-6 tracking-tight">
          Manage Your Todos
        </h1>

        <div className="mb-6">
          <TodoForm />
        </div>

        {todos.length === 0 ? (
          <p className="text-pink-400 text-center py-4 italic"> Add your first todo!</p>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</TodoProvider>
  )
}

export default App