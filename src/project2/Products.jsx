import React from 'react'
import './producthome.css';
function Products({ products,addToCart }) {
    
    console.log(products);
    return (
        <div className='product'>
            {
                products.map((product) => (
                    <div className='p'>
                        <img src={product.thumbnail} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products