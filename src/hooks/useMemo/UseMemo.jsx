import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [value, setValue] = useState(0);

    const [toggle,setToggle] = useState(false);

    const get_value = () => {
        setValue(value + 1);
    }

    const counting = (v) =>{
        for (let i = 0; i <= 100000000; i++) {
            
        }
        return v;
    }

    // console.log(counting(10));

    // use of useMemo
    // Note  1) useMemo value ko return krta hai, useEfffect nhi krta
    // Note  2) useMemo result ko variable me rakhta hai, useEffect nhi rakhta.
    const return_result = useMemo(()=>{
        console.log("hi")
        return counting(10);
    },[value])

    return (
        <div>
            <h2>Use Memo Hook</h2>

            <p>Value is {value}</p>
            <button onClick={get_value}>Click</button>

            <p>Return result is {return_result}</p>
            <button onClick={()=>setToggle(!toggle)}>{toggle ? "Onn" : "Off"}</button>
        </div>
    )
}

export default UseMemo


