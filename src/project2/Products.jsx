import React from 'react'
import './producthome.css';
function Products({ products,addToCart,cart }) {
    
    console.log(products);
    return (
        <div className='product'>
            {
                products.map((product) => (
                    <div className='p'>
                        <img src={product.thumbnail} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        {/* // When the developer needs to check for a condition on an array and wants to know if at least one element fulfills that condition */}
                        <button disabled={cart.some((item)=>item.id === product.id)} onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products