import React from 'react'
import {useSelector} from 'react-redux';

function Cart() {

    const cart = useSelector(state => state.ecom.cart)
    return (
        <>
        
        <div>
           
<img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/45/000000/external-cart-essentials-icongeek26-linear-colour-icongeek26.png"/>      </div>
<span style={{fontSize:"20px"}}>{cart.length}</span>
</>
    )
}

export default Cart
