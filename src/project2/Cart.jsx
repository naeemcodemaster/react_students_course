import React from 'react'
import './producthome.css';
function Cart({cart,removeProduct,IncreaseQty,DecreaseQty}) {
  return (
    <div className='cart'>
    <h3 style={{ textAlign: 'center' }}>Cart</h3>
    {
      cart.length === 0 && <p>Cart Empty</p>
    }

    {
      cart.map((item) => (
        <div className='cartItem'>
          <img src={item.thumbnail} style={{ width: '100px', height: '100px' }} />
          <div>
          <p>Price: {item.price}</p>
          <div style={{display:'flex'}}>
          <button onClick={()=>DecreaseQty(item)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={()=>IncreaseQty(item)}>+</button>
          </div>
          <p>Total Price: {item.totalPrice}</p>
          <button onClick={()=>removeProduct(item)}>Remove Product</button>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default Cart