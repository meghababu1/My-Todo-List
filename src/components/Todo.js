import React from 'react'
import './Todo.css'

export const Todo = ({todo,handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div className = "todo">
            <p className = { todo.complete?"strike":"no-strike" } id = {todo.id} key ={todo.id + todo.task} onClick = {handleClick} value = {todo.id}> { todo.task } </p>   <br/><br/>
        </div>
    )
}