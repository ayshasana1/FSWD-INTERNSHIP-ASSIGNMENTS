import React, { useState, useEffect } from "react";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    console.log("Cart Updated:", cart);
  }, [cart]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Product List</h1>

      <h2>Cart Count: {cart.length}</h2>

      {products.map((product) => (
        <div 
          key={product.id} 
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "250px"
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;