import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product">
      <img src={require("../assets/logo.png")} alt={"logo"} />
      <h3>Produto 1</h3>
    </div>
  );
}

export default ProductCard;
