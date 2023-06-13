import React, { useState } from "react";
import Cart from "../Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";

const Order = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remaining = cart.filter((c) => c.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleRemoveCart = (id) => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="w-4/5  mx-auto mt-10">
          <h1 className="text-4xl ">There is Your Orders</h1>
          <h2 className="text-2xl">Total Added Products : {saveCart.length}</h2>
          <div className=" gap-2 grid  mt-10">
            {cart.map((product) => (
              <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
              ></ReviewItem>
            ))}
          </div>
        </div>

        <div className="mx-10 mt-12 ">
          <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
