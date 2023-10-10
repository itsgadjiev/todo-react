import React from 'react'
import TodoList from './TodoList'
import { TodoInput } from './TodoInput';


export const Todo = () => {

    const [todosArr, setTodos] = React.useState([]);
    return (
        <div className='todo-wrapper'>
            <TodoInput todos={todosArr} setTodos={setTodos} />
            <TodoList todos={todosArr} />
        </div>
    )
}
