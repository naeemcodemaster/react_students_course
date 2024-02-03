import React, { useState } from 'react'

const Three = () => {
    const [todo, setTodo] = useState([]);

    const [input,setInput] = useState("");

    const handleInput = (e) => {
        // console.log(e);
        // console.log(e.target.value);
        // console.log("hi");
        const value = e.target.value;
        setInput(value);
    }

    const addItem = () => {
        // setTodo(input)

        setTodo((prev)=>{
            return [...prev,input];
            
        })
    }
    console.log(todo);
    return (
        <>
            <h2>Todo List</h2>
            <label>Add Task</label>
            <input type='text' value={input} onChange={handleInput} placeholder='Enter Item' />
            <button onClick={addItem}>Add item</button>
        </>
    )
}

export default Three