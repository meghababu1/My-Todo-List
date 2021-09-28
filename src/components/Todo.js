import React from 'react'
import './Todo.css'

export const Todo = ({todo}) => {
    return (
        <div className = "todo">
            <p className = { todo.complete?"strike":"" }> { todo.task } </p>   <br/><br/>
        </div>
    )
}
