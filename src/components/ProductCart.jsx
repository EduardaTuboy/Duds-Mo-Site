import React from "react";
import "./ProductCart.css";

function ProductCart(props) {
  return (
    <div className="product_cart NB_border">
      <img src={require("../assets/1.png")} alt={"logo"} />
      <div>
        <h3>{props.name}</h3>
        <h3>R$ {props.price}</h3>
      </div>
      <div id="buttons_cart"></div>
      <div id="productcart_button">+</div>
      <div id="productcart_button">-</div>
    </div>
  );
}

export default ProductCart;
