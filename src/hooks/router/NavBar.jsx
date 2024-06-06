import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './about.css'
function NavBar() {
  return (
    <div>
        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a> */}

        {/* <Link to={'/'}>Home</Link> */}
        {/* <Link to={'/about'}>About</Link> */}
        {/* <Link to={'/contact'}>Contact</Link> */}
        {/* <Link to={'/student/khan'}>Student</Link> */}
        {/* <Link to={'/student/khan/21'}>Student</Link> */}


        {/* <a href='/student/${product.id}'></a> */}

        {/* use of Navlink instead of Link */}
        <ul className='nav'>
            <li>
            <NavLink className='nav-link' to='/'>Home</NavLink>
        
            </li>
            <li>
            <NavLink className='nav-link' to='/about'>About</NavLink>
        
            </li>
            <li>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
            </li>

            <li>
            <NavLink className='nav-link' to='/student'>Contact</NavLink>
            </li>
            {/* <li>
            <NavLink className='nav-link' to='/search' state={{name:'state ka name',age:'state me age'}}>Search</NavLink>
            </li> */}

            {/* <li>
            <NavLink className='nav-link' to='/company'>Company</NavLink>
            </li>

            <li>
            <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li> */}
        </ul>
        
        
    </div>
  )
}

export default NavBar