import React, { useEffect, useReducer, useState } from 'react'
import './producthome.css';
import Products from './Products';
import Cart from './Cart';


const initialState = {
    products:[],
    cart:[]
}


const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return {...state,products:action.payload}
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
    return (
        <div className='productHome'>
            <Products />
            <Cart />
        </div>
    )
}
export default ProductHome