import React from "react";
import logo from "../assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Navbar(props) {
  //    if(props.isLogged){

  //    }   

  return (
    <nav className="main_navbar">
        <img src={logo} id="nav_logo"></img>
        <span id="nav_title">
          Duds & Mo <br /> Productions
        </span>
        <div>
          <a href="/" className="navbar-link"  style={{ color: props.pagina === "home" ? "white" : "black" }}>Home</a>
          <a href="/eyegloome" className="navbar-link" style={{ color: props.pagina === "eyegloome" ? "white" : "black" }}>Nossa Graphic Novel</a>
          <a href="/jogos" className="navbar-link" style={{ color: props.pagina === "jogos" ? "white" : "black" }}>Nossos Jogos</a>
          <a href="/loja" className="navbar-link" style={{ color: props.pagina === "loja" ? "white" : "black" }}>Nossa Loja</a>
        </div>
        {/* bola de perfil */}
        <div id="cart" className="circle"><ShoppingCartIcon/></div>
        <div id="profile" className="circle"><span>GF</span></div> 
        
    </nav>
  );
}

export default Navbar;
