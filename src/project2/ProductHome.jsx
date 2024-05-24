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

    console.log("Cart data",state.cart);
    return (
        <div className='productHome'>
            <Products products={state.products} addToCart={addToCart}/>
            <Cart cart={state.cart}/>
        </div>
    )
}
export default ProductHome