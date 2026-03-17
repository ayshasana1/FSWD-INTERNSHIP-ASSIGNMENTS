const express = require("express");
const app = express();

app.use(express.json()); 


let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];


//  GET all products
app.get("/products", (req, res) => {
  res.json(products);
});


//  GET single product
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});


//  POST new product
app.post("/products/add", (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res.status(400).json({ message: "All fields required" });
  }

  products.push({ id, name, price });

  res.json({ message: "Product added", products });
});


//  PUT update product
app.put("/products/update/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price } = req.body;

  if (name) product.name = name;
  if (price) product.price = price;

  res.json({ message: "Product updated", product });
});


//  DELETE product
app.delete("/products/delete/:id", (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deleted = products.splice(index, 1);

  res.json({ message: "Product deleted", deleted });
});


// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});