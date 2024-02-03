import React, { useState } from 'react'

const First = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  }

  const decr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      value is {count}

      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>


    </>
  )
}

export default First