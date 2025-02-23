import React from "react";
import "./CardImg.css";

function CardImg(props) {
  const handleCardClick = () => {
    window.open(props.link, "_blank"); // Abre o link em uma nova guia
  };

  return (
    <div
      className="card_image"
      style={{
        flexDirection: props.order === "img-card" ? "row" : "row-reverse",
      }}
    >
      <img src={props.src} alt={props.alt} />
      <div
        className="card column hover_NB_border"
        style={{ backgroundColor: props.bg_color }}
        onClick={handleCardClick} // Adicionando o onClick diretamente na div
      >
        <h3 style={{ color: props.text_color }}>{props.title}</h3>
        <p style={{ color: props.text_color }}>{props.content}</p>
      </div>
    </div>
  );
}

export default CardImg;
