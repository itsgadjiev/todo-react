import React from 'react'
import '../../App.css'

export const TodoInput = ({ todos, setTodos }) => {
    const [todoItem, setTodoItem] = React.useState('');

    const AddToTodoArr = () => {
        if (todoItem.trim() !== '') {
            setTodos([...todos, todoItem]);
            setTodoItem('');
        }
    };

    const handleInputChange = (e) => {
        setTodoItem(e.target.value);
    };

    return (
        <div >
            <h2 className='text-center'>Things To Do</h2>
            <input type="text" placeholder='to-do' onChange={handleInputChange} value={todoItem} />
            <button onClick={AddToTodoArr}>Add</button>
        </div>
    )
}

