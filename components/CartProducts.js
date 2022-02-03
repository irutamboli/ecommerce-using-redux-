import React from 'react'

import {useSelector} from "react-redux";

function CartProducts() {

    const cart = useSelector(state => state.ecom.cart)
    return (
        <div>
            {cart.map(ele=>(
                <li>Title - {ele.title}   Quantity-{ele.quantity}  Total Price -{ele.quantity*ele.price} </li>
            ))}

            
        </div>
    )
}

export default CartProducts
