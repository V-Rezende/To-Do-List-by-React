import {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

  return (
    <div className='todo-form'>
        <h2>New Task:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='What do you have to do?'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Study">Study</option>
                <option value="Personal">Personal</option>
            </select>
            <button type='submit'>Create new Tast</button>
        </form>
    </div>
  )
}

export default TodoForm