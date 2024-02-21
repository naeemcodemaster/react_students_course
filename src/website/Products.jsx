import React from 'react'
import './product.css';
import coffee1 from '../assets/coffee1.svg'
import coffee2 from '../assets/coffee2.svg'
const Products = () => {
  return (
    <>
    <div className='products'>
        <div className='card'>
            <img src={coffee1}/>
            <h3>Coffee1 title</h3>
            <a href='#'>Buy <span>$120</span></a>
        </div>

        <div className='card'>
            <img src={coffee2}/>
            <h3>Coffee1 title</h3>
            <a href='#'>Buy <span>$120</span></a>
        </div>

        <div className='card'>
            <img src={coffee1}/>
            <h3>Coffee1 title</h3>
            <a href='#'>Buy <span>$120</span></a>
        </div>

        <div className='card'>
            <img src={coffee1}/>
            <h3>Coffee1 title</h3>
            <a href='#'>Buy <span>$120</span></a>
        </div>
    </div>
    </>
  )
}

export default Products