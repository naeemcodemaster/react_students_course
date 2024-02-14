import React from 'react'
import './nav.css';
const Nav = () => {
  return (
    <>
        <div className='container'>
        <div className='nav'>
        <h2><a href='/'><span>Coffee</span> Store</a></h2>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Location</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='btns'>
                <button>Sign In</button>
                <button>Sign Up For Free</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Nav