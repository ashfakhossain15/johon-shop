import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
  const { name, price, img, seller } = props.product;

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="full-cart  transition duration-700 transform  hover:bg-gray-300 hover:scale-105 hover:text-black hover:shadow-xl hover:shadow-indigo-500">
      <div className="flex flex-col ">
        <div className="p-3 mb-10">
          <div className=" card-info">
            <img src={img} alt="" />
            <h2 className="text-xl text-start hover:text-red-300">{name}</h2>
            <h3 className="mt-4 mb-2 text-lg">Manufacturer:{seller}</h3>
            <p>Price: {price} $</p>
          </div>
        </div>
        <button
          className="bg-orange-400 w-full block transition duration-50 hover:bg-blue-500 absolute bottom-0"
          onClick={() => handleAddToCart(props.product)}
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Card;
