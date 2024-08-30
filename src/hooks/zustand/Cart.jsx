// src/components/Cart.js
import React from 'react';
import useCartStore from './CartStore';
function Cart() {
  const cart = useCartStore((state) => state.cart);

  
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
