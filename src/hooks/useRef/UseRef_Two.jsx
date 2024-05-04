import React, {useState, useRef } from 'react'

function UseRef_Two() {
    // We can access the DOM element
    const [text, setText] = useState("");

    const input = useRef("");

    const myfun = ()=>{

        // console.log(input);
        
        // console.log("ref value is ",input.current);

        // console.log("ref value is ",input.current.value);


        // console.log("value is ",text);
        // input.current.style.backgroundColor="red";
        input.current.focus();
    }
    return (
        <>
            <p>input value is {text}</p>
            <input type='text' ref={input} value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={myfun}>Take Input</button>
        </>
    )
}

export default UseRef_Two