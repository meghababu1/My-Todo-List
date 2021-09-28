import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({todolists}) => {
    return (
        <div>
           {
               todolists.map((todo) => {
                   return(<Todo todo = {todo}/>)

               })
           } 
        </div>
    )
}
