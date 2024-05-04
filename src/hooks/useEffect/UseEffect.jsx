import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    const increment = () => {
        setCount(count + 5);
    }

    const increment2 = () => {
        setCount2(count2 + 2);
    }

    useEffect(() => {
        console.log("Executed");

        // API calling, File Calling, Database Calling

    },[count,count2]);

    return (
        <>
            <div>UseEffect</div>
            <p>this is my component</p>
            <p>Value is {count}</p>
            <p>Value is {count2}</p>
            <button onClick={increment}>count</button>
            <button onClick={increment2}>count2</button>
        </>
    )
}

export default UseEffect