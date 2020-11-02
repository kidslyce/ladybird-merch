import React from 'react';
import CartItem from './CartItem';
//functional component I can grab the destructed value out of the props and O have access to it now.
//
//we have access to the value to the cart array and we are now able to loop through it 
        //since its multile items we will need to setup the key and then we want to pass down the item as well as the rest of the value
        //and by passing through another value prop we can pass the methods down to the cart item 
export default function CartList({ value }) {
    const { cart } = value

    return (
        
        <div className="container-fluid"> 
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}/>

            })}
            
        </div>
    )
}
