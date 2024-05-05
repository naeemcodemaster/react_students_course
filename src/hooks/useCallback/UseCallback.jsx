import React, { useState,useCallback } from 'react'

const fun_set = new Set();
function UseCallback() {
    const [count, setCount] = useState(0);
    const [moreCount, setMoreCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }
    // const decrement = () => {
    //     setCount(count - 1);
    // }
    // const moreClick = () => {
    //     setMoreCount(moreCount + 1);
    // }

    const increment = useCallback(()=>{
        setCount(count + 1);
    },[count])

    const decrement = useCallback(()=>{
        setCount(count + 1)
    },[count])

    const moreClick = useCallback(()=>{
        setMoreCount(moreCount + 1);   
    },[moreCount])

    fun_set.add(increment);
    fun_set.add(decrement);
    fun_set.add(moreClick);
    console.log(fun_set);
    return (
        <>

            Count : {count}
            <br />
            More Count: {moreCount}
            <br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={moreClick}>More Click</button>

        </>
    )
}

export default UseCallback