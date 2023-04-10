import React, { useEffect, useState } from "react";
import "./Shop.css";
import Card from "../Card/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Card product={product}
          key={product.id}></Card>
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summary</h3>
      </div>
    </div>
  );
};

export default Shop;
