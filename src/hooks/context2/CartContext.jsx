import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log("Cart Items",cart)
    const addToCart = (item) => {
        setCart([...cart,item]);
       
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item=>item.id !== id));
    }

    const totalItems = cart.length;

    return (
        <CartContext.Provider value={{cart,addToCart,removeFromCart,totalItems}}>
            {children}
        </CartContext.Provider>
    )

}