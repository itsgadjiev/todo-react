import React from 'react'

const TodoList = ({ todos }) => {
    return (
        todos.map((e, idx) => {
            <a key={idx}>e</a>
        })
    )
}

export default TodoList