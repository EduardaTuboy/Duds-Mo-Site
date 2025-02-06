import React from "react";
import "./CathegoryCard.css";

function CathegoryCard(props) {
  return (
    <div className="cathegory" onClick={props.onClick}>
      <img src={props.url} />
      <h3>{props.name}</h3>
    </div>
  );
}

export default CathegoryCard;
