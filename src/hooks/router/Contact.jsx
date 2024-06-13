import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation();
  console.log(location.pathname);
  const name = location.pathname.replace("/","");

  return (
    <div>Page name is {name}</div>
  )
}

export default Contact