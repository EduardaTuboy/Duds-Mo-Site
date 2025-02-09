import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./Navbar.css";

function Logged() {
  return (
    <div className="logged">
      <div id="cart" className="circle">
        <ShoppingCartIcon />
      </div>
      <a href="register">
        <div id="profile" className="circle">
          <PersonRoundedIcon sx={{ fontSize: 40 }} />
        </div>
      </a>
    </div>
  );
}

export default Logged;
