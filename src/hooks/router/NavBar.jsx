import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a> */}


        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        
    </div>
  )
}

export default NavBar