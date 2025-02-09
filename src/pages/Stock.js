import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StockItem from "../components/StockItem";

function Stock() {
  return (
    <div>
      <Navbar pagina={"stock"} />
      <div className="column">
        <StockItem />
        <StockItem />
      </div>
    </div>
  );
}

export default Stock;
