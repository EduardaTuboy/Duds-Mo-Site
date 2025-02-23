import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import Logged from "./Logged";
import Unlogged from "./Unlogged";

function Navbar(props) {
  var isLogged = true;
  return (
    <nav className="main_navbar">
      <img src={logo} id="nav_logo"></img>
      <span id="nav_title">
        Duds & Mo <br /> Productions
      </span>
      <div className="navbar-links">
        <a
          href="/"
          className="navbar-link"
          style={{ color: props.pagina === "home" ? "white" : "black" }}
        >
          Home
        </a>
        <a
          href="/eyegloome"
          className="navbar-link"
          style={{ color: props.pagina === "eyegloome" ? "white" : "black" }}
        >
          Nossa Graphic Novel
        </a>
        <a
          href="/jogos"
          className="navbar-link"
          style={{ color: props.pagina === "jogos" ? "white" : "black" }}
        >
          Nossos Jogos
        </a>
        <a
          href="/loja"
          className="navbar-link"
          style={{ color: props.pagina === "loja" ? "white" : "black" }}
        >
          Nossa Loja
        </a>
      </div>
      {isLogged ? <Logged pagina={props.pagina} /> : <Unlogged />}
      <a href="/stock">📦</a>
    </nav>
  );
}

export default Navbar;
