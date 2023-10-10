import React from 'react'

const TodoList = ({ todos }) => {
    const [checkedItems, setCheckedItems] = React.useState({});
    const [checkedItemsCount, setCounter] = React.useState(0)

    const handleCheckboxChange = (idx) => {

        setCheckedItems({
            ...checkedItems,
            [idx]: !checkedItems[idx],
        });

        if (checkedItemsCount[idx]) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
        console.log(checkedItemsCount);

    };

    return (
        <ul className='todo-ul'>
            {todos.map((e, idx) => (
                <li key={idx}>
                    <input id='idx'
                        type="checkbox"
                        checked={checkedItems[idx] || false}
                        onChange={() => handleCheckboxChange(idx)}
                    />
                    {e}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;