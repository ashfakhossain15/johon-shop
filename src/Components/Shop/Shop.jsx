import React, { useEffect, useState } from "react";
import "./Shop.css";
import Card from "../Card/Card";
import Cart from "../Order item list/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container ">
        {products.map((product) => (
          <Card
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          ></Card>
        ))}
      </div>
      <div>
        <div className="sticky top-0">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
