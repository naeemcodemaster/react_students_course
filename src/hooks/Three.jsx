import React, { useEffect, useState } from 'react'

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

        const allTask = JSON.parse(localStorage.getItem('mytask')) || [];
        
        allTask.push(input);

        localStorage.setItem('mytask',JSON.stringify(allTask));

        setInput("");
    }

    const deleteItem = (id) => {
        console.log(id);

        setTodo((prev)=>{
            return prev.filter((item,index)=>{
                return index != id;
            })
        })
    }

    // useEffect(callback,dependencies)
    useEffect(()=>{
        // console.log("hi");
        const storeItem = JSON.parse(localStorage.getItem('mytask')) || [];

        setTodo(storeItem);

       
    },[])

    console.log(todo);
    return (
        <>
            <h2>Todo List</h2>
            <label>Add Task</label>
            <input type='text' value={input} onChange={handleInput} placeholder='Enter Item' />
            <button onClick={addItem}>Add item</button>
            <br/>
            {
                todo.length ? todo.map((item,index)=>(
                    <li key={index}>{item} - <button onClick={() => deleteItem(index)}>Delete</button></li>
                )) : "No Data"
            }
        </>
    )
}

export default Three