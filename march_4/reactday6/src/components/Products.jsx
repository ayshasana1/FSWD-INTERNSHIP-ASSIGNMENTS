//Lifting state up- when 2 compnents need same data -> move state to common parent

import React from "react";

function Product({name, addToCart}){
    return(
        <div>
            <h3>{name}</h3>
            <button onClick={()=>addToCart(name)}>Add To Cart</button>
        </div>
    );
}
export default Product;