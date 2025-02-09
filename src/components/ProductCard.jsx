import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product NB_border">
      <img src={require("../assets/1.png")} alt={"logo"} />
      <h3>{props.name}</h3>
      <h3>R$ {props.price}</h3>
    </div>
  );
}

export default ProductCard;
