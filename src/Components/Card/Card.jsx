import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
  const { name, price, img, seller } = props.product;

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="transition duration-700 transform full-cart hover:bg-gray-300 hover:scale-105 hover:text-black hover:shadow-xl hover:shadow-teal-200">
      <div className="flex flex-col ">
        <div className="p-3 mb-10">
          <div className=" card-info">
            <img src={img} alt="" />
            
            <h2 className="text-xl transition duration-500 text-start hover:text-indigo-500">
              {name}
            </h2>
            <h3 className="mt-4 mb-2 text-lg">Manufacturer:{seller}</h3>
            <p>Price: {price} $</p>
          </div>
        </div>
        <button
          className="absolute bottom-0 block w-full transition duration-500 bg-orange-400 hover:bg-blue-500"
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
