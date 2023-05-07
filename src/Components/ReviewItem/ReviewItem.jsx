import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="">
      <div className="border rounded-md border-sky-500 p-3 flex justify-between space-x-3 items-center">
        <div className="flex space-x-3">
          <div className="rounded-lg overflow-hidden">
            <img className="w-20" src={img} alt="" />
          </div>
          <div className="">
            <h2>{name}</h2>
            <p>Price: {price}$</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        <div className=" text-orange-500  duration-300 hover:text-blue-600">
          <button
            onClick={() => handleRemoveFromCart(id)}
            className="rounded-3xl bg-teal-800 duration-1000 hover:bg-success-content/50"
          >
            <FontAwesomeIcon className="" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
