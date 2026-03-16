import React from "react";

function Cart({items}){
    return(
        <div>
            <h2>Cart Item</h2>
            {items.map((items,index)=>(
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}
export default Cart;