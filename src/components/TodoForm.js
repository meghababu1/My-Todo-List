import React, { useState } from 'react'
import './TodoForm.css'

export const TodoForm = ({addTask}) => {
    const [userInput,setUserInput] = useState("")
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    return (
        <div>
            <form>
                <input type="text" value = {userInput} onChange = {handleChange} placeholder ="Enter your task here"/>
                <button className = "btn" onClick = {handleSubmit}>Add</button>
            </form>
        </div>
    )
}
