import React, { useEffect, useReducer, useState } from 'react'
import './producthome.css';
import Products from './Products';
import Cart from './Cart';


const initialState = {
    products:[],
    cart:[],

}

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return {...state,products:action.payload}
        case 'ADD_TO_CART':
            let product = action.payload;
            product.quantity = 1;
            product.totalPrice = product.price;
            let updatedProduct = [...state.cart,product];
            return {...state,cart:updatedProduct};
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter((product)=>product.id !== action.payload.id)}
        case 'INCREASE_QTY':
            let index = state.cart.findIndex((product)=>product.id === action.payload.id);
            let item = state.cart[index];
            return {
                ...state,
                cart:[...state.cart.slice(0,index),{...item,quantity:item.quantity+1,totalPrice:(item.quantity + 1)*item.price},...state.cart.slice(index+1)]
            }    
        default:
           return state;
    }
}

function ProductHome() {


    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch('https://dummyjson.com/products');
            // console.log(res);
            const productJson = await res.json();
            // console.log(productJson.products);
            dispatch({type:'ADD_PRODUCT',payload:productJson.products});
            

        }
        getProducts();
    }, [])


    const addToCart = (product) => {
        console.log("Cart product ", product);
        dispatch({type:'ADD_TO_CART',payload:product})
    }
    
    // Remove from cart
    const removeProduct = (product)=>{
        dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }


    // Increase qty
    const IncreaseQty = (product) =>{
        dispatch({ type: 'INCREASE_QTY', payload: product })
    }

    //decrease qty
    const DecreaseQty = (product) =>{
        dispatch({ type: 'DECREASE_QTY', payload: product })
    }


    console.log("Cart data",state.cart);
    return (
        <div className='productHome'>
            <Products products={state.products} addToCart={addToCart} cart={state.cart}/>
            <Cart cart={state.cart} removeProduct={removeProduct} IncreaseQty={IncreaseQty} DecreaseQty={DecreaseQty}/>
        </div>
    )
}
export default ProductHome