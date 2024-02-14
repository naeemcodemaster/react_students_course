import React from 'react'

const Data = ({name,age}) => {
  return (
    // <div>
    //     <h2>Data Page</h2>
    //     <p>Username is {props.name}</p>
    //     <p>Age is {props.age}</p>
    // </div>

    <div>
        <h2>Data Page</h2>
        <p>Username is {name}</p>
        <p>Age is {age}</p>
    </div>
  )
}

export default Data