import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function CartIcon() {
    const { totalItems } = useContext(CartContext);
    return (
        <div style={{ position: 'relative', display: 'inline-block',background:'orange' }}>
            {
                totalItems > 0 && (
                    <span style={{
                        position:'absolute',
                        top:0,
                        right:'-10px',
                        background:'red',
                        borderRadius:'50%',
                        color:'white',
                        padding:'5px'
                        
                    }}>
                        {totalItems}
                    </span>
                )
            }
        </div>
    )
}

export default CartIcon