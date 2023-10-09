import React from 'react'
import TodoList from './TodoList'
import { TodoInput } from './TodoInput';

const todosArr = [];

export const Todo = () => {
    return (
        <div>
            <TodoInput todos={todosArr} />
            <TodoList todos={todosArr} />
        </div>
    )
}
