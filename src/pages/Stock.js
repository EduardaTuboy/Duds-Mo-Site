import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StockItem from "../components/StockItem";

function Stock() {
  return (
    <div>
      <Navbar pagina={"stock"} />
      <div className="column">
        <StockItem name={"Made in Brazil"} quantity={"479"} />
        <StockItem name={"To bavu"} quantity={"481"} />
      </div>
    </div>
  );
}

export default Stock;
