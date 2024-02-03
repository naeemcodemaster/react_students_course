import React, { useState } from 'react'

const Second = () => {
    
    const [count, setCount] = useState(0);
    const increment = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((prev)=>prev + 1);
        setCount((prev)=>prev + 2);

    }
    return (
        <>
            Count is {count}
            <br />
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Second