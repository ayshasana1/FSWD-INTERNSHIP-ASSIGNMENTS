
import React, {useState} from "react";
import Counter from "./components/Counter";
import ThemeProvider from "./context/ThemeContext";
import NavBar from "./components/NavBar";

/* 
import Product from "./components/Products";

function App(){
  
  
   

  const[cartitems, setCartItems]=useState([]);

  const addToCart=(product)=>{
    setCartItems([...cartitems, product]);

  };
  return(
    <div>

      <h1>Local State Management Demo</h1>
      <Counter />


      <h1>Shopping App</h1>
      <Product name="Laptop" addToCart={addToCart}/>
      <Product name="Phone" addToCart={addToCart}/>
      <Product name="Headphone" addToCart={addToCart}/>
      <Product name="Powerbank" addToCart={addToCart}/>

    </div>
    

    
  );
}
export default App;
 */


function App(){
  return(
    <ThemeProvider>
      <NavBar/>
    </ThemeProvider>

  );
}

export default App;