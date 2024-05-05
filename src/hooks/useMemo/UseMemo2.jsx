import React,{useMemo, useState} from 'react'
import Child from './Child'

function UseMemo2() {
    const [counter, setCounter] = useState(0);

    const memoized = useMemo(()=>{
        return <Child/>

    },[])
    return (
        <div>

            {/* <Child /> */}
            {memoized}
            <p>value is {counter}</p>
            <button onClick={() =>setCounter(counter + 1)}>Click me</button>

        </div>
    )
}

export default UseMemo2