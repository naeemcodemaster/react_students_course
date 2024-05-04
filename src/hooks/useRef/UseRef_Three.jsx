import React, { useEffect, useRef } from 'react'
// 2. Storing previous values
// You can use useRef to store a value that persists across renders but doesn't trigger a re-render when updated. This can be useful when you need to keep track of previous values without triggering unnecessary renders.
function UseRef_Three({ value }) {
    const prevValueRef = useRef(null);
    useEffect(() => {
        prevValueRef.current = value;
    }, [value])

    return (
        <>
            <p>current value is {value}</p>
            <p>Previous value is {prevValueRef.current}</p>

        </>
    )
}

export default UseRef_Three