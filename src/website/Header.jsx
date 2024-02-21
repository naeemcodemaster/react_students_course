import React from 'react'
import './header.css';
import about_resume from '../assets/about_resume_3.png';
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header>
        <div className='header_section'>
            <div className='header_left'>
                <h3>START TO SUCCESS</h3>
                <h2>Access To <span>5000+</span> Resume from <span>300</span> Instructions & Institutions</h2>
                <p>Various versions have envolved over the years, sometimes by accident.</p>
                {/* <div className='search_form'>
                <input type='text' placeholder='Search Coffee'/>
                <CiSearch id='search_icon'/>
                </div> */}
                <button>Create My Resume</button>
            </div>
            <div className='header_right'>
                <img src={about_resume}/>
               
            </div>
            
        </div>
    </header>
  )
}

export default Header