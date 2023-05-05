import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + tax + totalShipping;
  return (
    <div className="cart-container">
      <div className="p-10 mt-5 text-black">
        <h3 className="p-3 text-xl text-center ">Order Summary</h3>
        <p className="p-3">Select Item :{quantity}</p>
        <p className="p-3">Total Price:${total}</p>
        <p className="p-3">Total Shipping : {totalShipping}</p>
        <p className="p-3">Total Tax :{tax.toFixed(2)}</p>
        <p className="p-3 text-xl">Grand Total:${grandTotal.toFixed(2)} </p>
      </div>
    </div>
  );
};

export default Cart;
