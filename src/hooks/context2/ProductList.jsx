import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function ProductList() {
    const {addToCart} = useContext(CartContext);
    const products =[
        {id:1,name:"mouse",price:100},
        {id:2,name:"Hard Disk",price:200},
        {id:3,name:"keyboard",price:300},
    ]
  return (
    <div>
        {
            products.map((product,index)=>(
                <div key={index}>
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList