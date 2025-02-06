import React from "react";
import "./Navbar.css";

function Unlogged() {
  function handleClick() {}

  return (
    <div>
      <div id="register" onClick={handleClick}>
        Entrar
      </div>
    </div>
  );
}

export default Unlogged;
