import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    return (
        <>
            <h1>Your Cart</h1>
            {
                cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ):(
                    <>

                        <ul>
                            {
                                cart.map((item)=>(
                                    <li key={item.id}>
                                        {item.name} - {item.price}
                                        <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                                    </li>
                                ))
                            }
                        </ul>

                    </>
                )
            }
        </>
    )
}

export default Cart