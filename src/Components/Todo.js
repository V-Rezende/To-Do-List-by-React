import React from "react";

const Todo = ({todo, removeTodo, completeTodo }) => {

    return (
        <div 
            className="todo" 
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>{todo.text}</p>
              <p className='category'><strong>{todo.category}</strong></p>
            </div>
            <div>
              <button className="complete" onClick={() => completeTodo(todo.id)}>Done</button>
              <button className="remove" onClick={() => removeTodo(todo.id)} >X</button>
            </div>
        </div>
    )
}

export default Todo;