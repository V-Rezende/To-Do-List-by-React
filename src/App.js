import { useState } from 'react'
import './App.css'
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import Search from './Components/Search';
import Filter from './Components/Filter';


function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: "Build a To Do List using React",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Gym ",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Revision JavaScript",
      category: "Study",
      isCompleted: false,
    }
  ]);

    const [search, setSearch] = useState ("")

    const [filter, setFilter] = useState ("All")

    const [sort, setSort] = useState ("Asc")

    const addTodo = (text, category) => {

      const newTodos = [...todos, {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      }
    ]

    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }
  //const newTodos = [...todos]: This line creates a new array called newTodos by spreading the elements from an existing array called todos. The spread operator (...) is used to make a shallow copy of the todos array. This is done to avoid directly modifying the original todos array, which is generally considered a good practice in React or similar frameworks to ensure immutability.

  
  return (
    <div className='app'>
      <h1>To Do List</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => 
          filter === "All" 
            ? true 
            : filter === "Completed" 
            ? todo.isCompleted 
            : !todo.isCompleted
            )
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))

        .sort((a, b) => 
          sort === "Asc" 
            ? a.text.localeCompare(b.text) 
            : b.text.localeCompare(a.text)
            ) 

        .map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            completeTodo={completeTodo}
            />
        ))} 
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
