import React, { useState,useRef } from 'react'


function UseRef_One() {

    // const [value, setValue] = useState(0);

    const count = useRef(10);

    console.log("hi");


    // const incre = () =>{
    //     setValue(value + 1);
    // }


    const changeCount = ()=>{

        // console.log(count);
        // console.log(count.current);

        count.current = count.current + 1;


        console.log(count.current);

        
    }
    
    return (
        <>
            {/* <p>value is {value}</p> */}
            {/* <button onClick={incre}>Change value</button> */}

            <p>Count value is {count.current}</p>
            <button onClick={changeCount}>change</button>
        </>
    )
}

export default UseRef_One