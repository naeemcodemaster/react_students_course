import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import './nav.css';
const Nav = () => {

  // Toggle Navigation
  const [toggle,setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <>
        <div className='container'>
        <div className='nav'>
        <h2><a href='/'><span>Coffee</span> Store</a></h2>
            <ul id='desktop_nav'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Location</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='btns' id='desktop_btns'>
                <button>Sign In</button>
                <button>Sign Up For Free</button>
            </div>

            
              <div onClick={handleToggle}>
              {toggle ?  <IoMdClose className='hamburger_icon'/> :  <RxHamburgerMenu className='hamburger_icon' />}
              </div>
            

           


            
            
        </div>
        {/* Mobile Menu work */}
        <div className='mobile_menu' style={toggle?{marginLeft:'0'}:{marginLeft:'-100%'}}>
            <ul id='mobile_nav'>
            <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Location</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='btns' id='mobile_btns'>
                <button>Sign In</button>
                <button>Sign Up For Free</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Nav