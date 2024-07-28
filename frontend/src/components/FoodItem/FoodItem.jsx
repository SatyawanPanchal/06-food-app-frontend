/* eslint-disable react/prop-types */
import React from "react";
import "./foodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({item }) => {
    const{id,image,description,name,price}=item
    
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;