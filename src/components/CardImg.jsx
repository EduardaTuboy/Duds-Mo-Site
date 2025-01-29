import React from "react";
import "./CardImg.css";

function CardImg(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      <h3>{props.title}</h3>
      <span className="card">{props.content}</span>
    </div>
  );
}

export default CardImg;
