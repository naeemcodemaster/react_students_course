import React from 'react'
import { useParams } from 'react-router-dom'

function Student() {

    const {name,age} = useParams();
    
  return (
    <div> {name} is a student of IT and his age is {age}</div>
  )
}

export default Student