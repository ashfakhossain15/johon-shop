import React from "react";
import "./Card.css";
const Card = (props) => {
  const { name, price, img, seller } = props.product;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-info">
          <img src={img} alt="" />
          <h2>Name : {name}</h2>
          <h3>Band:{seller}</h3>
          <p>Price: {price} $</p>
        </div>
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
