import { useState } from "react";
import productsData from "./data/products";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";

function App() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter(p => p.category === category);

  return (
    <div>
      <h1>Product Listing</h1>

      <Filter setCategory={setCategory} />

      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;