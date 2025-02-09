import React from "react";
import "./CardImg.css";

function CardImg(props) {
  return (
    <div
      className="card_image"
      style={{
        flexDirection: props.ordem === "img-card" ? "row" : "row-reverse",
      }}
    >
      <img src={props.src} alt={props.alt} />
      <div
        className="card column NB_border"
        style={{ backgroundColor: props.bg_color }}
      >
        <h3 style={{ color: props.text_color }}>{props.title}</h3>
        <p style={{ color: props.text_color }}>{props.content}</p>
      </div>
    </div>
  );
}

export default CardImg;
