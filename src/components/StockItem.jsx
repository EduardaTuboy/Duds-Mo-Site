import React from "react";
import "./StockItem.css";

function StockItem() {
  return (
    <div className="stock_row">
      <span>Made in Brazil</span>
      <span>479</span>
      <div>
        <button className="add">+</button>
        <button className="sub">-</button>
      </div>
    </div>
  );
}

export default StockItem;
