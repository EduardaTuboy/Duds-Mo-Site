import React from "react";
import "./StockItem.css";

function StockItem(props) {
  return (
    <div className="stock_row">
      <span className="product_name">{props.name}</span>
      <input type="number" className="quantity" value={props.quantity} />
      <div>
        <button className="add">+</button>
        <button className="sub">-</button>
      </div>
    </div>
  );
}

export default StockItem;
