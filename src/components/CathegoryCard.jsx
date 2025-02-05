import React from "react";
import "./CathegoryCard.css";

function CathegoryCard(props) {
  return (
    <div className="cathegory">
      <img src={require("../assets/logo.png")} alt={"logo"} />
      <h3>Categoria 1</h3>
    </div>
  );
}

export default CathegoryCard;
