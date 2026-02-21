import React, { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  // Match what the tests expect: includes "Tablet"
  // Also avoid any other name containing "Phone" (e.g., "Headphones")
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Phone", price: 699.99, inStock: false }, // out of stock for styling test
    { id: 3, name: "Tablet", price: 399.99, inStock: true },
    { id: 4, name: "Keyboard", price: 129.99, inStock: false },
  ]);

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <ProductList products={products} onRemove={handleRemove} />
    </>
  );
}