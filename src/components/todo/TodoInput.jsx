import React from 'react'




export const TodoInput = ({ todos }) => {
    const [todoItem, setTodoItem] = React.useState('');

    const AddToTodoArr = () => {
        todos.push(todoItem);
        console.log(todos);
    };

    const handleInputChange = (e) => {
        setTodoItem(e.target.value);
    };

    return (
        <div>
            <h2>Things To Do</h2>
            <input type="text" placeholder='to-do' onChange={handleInputChange} value={todoItem} />
            <button onClick={AddToTodoArr}>Add</button>
        </div>
    )
}

