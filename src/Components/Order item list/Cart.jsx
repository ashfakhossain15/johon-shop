import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart ,handleRemoveCart}) => {
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
      <div className="mt-5 text-black p-9">
        <h3 className="p-2 text-xl text-center ">Order Summary</h3>
        <p className="p-2">Select Item :{quantity}</p>
        <p className="p-2">Total Price:${total}</p>
        <p className="p-2">Total Shipping : {totalShipping}</p>
        <p className="p-2">Total Tax :{tax.toFixed(2)}</p>
        <p className="p-2 text-xl">Grand Total:${grandTotal.toFixed(2)} </p>
        <button
          onClick={handleRemoveCart}
          className="bg-red-400 w-full mx-auto transition duration-500 ease-in-out hover:bg-teal-800 hover:text-white flex justify-between items-center"
        >
          <span>Clear Cart</span>
          <FontAwesomeIcon className="" icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
