import React, { useState, useEffect } from "react";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import "./Caroucel.css";

function Caroucel() {
  const inicialPage = 0; // página inicial
  const [selectedPage, setSelectedPage] = useState(inicialPage);

  // Função para avançar ou retroceder na página
  function onClick(direction) {
    // Direção -1 para retroceder, 1 para avançar
    setSelectedPage((prevPage) => {
      let newPage = prevPage + direction;
      // Se for menor que 0, vai para a última página
      if (newPage < 0) newPage = 2; // considerando 3 páginas
      // Se for maior que 2 (última página), vai para a primeira página
      if (newPage > 2) newPage = 0;
      return newPage;
    });
  }

  // Efeito para avançar automaticamente a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      onClick(1); // Avança para a próxima página
    }, 10000); // 10000ms = 10 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []); // O array vazio garante que o efeito só roda uma vez (na montagem)

  return (
    <div id="caroucel">
      <button id="left" onClick={() => onClick(-1)}>
        <ArrowLeftRoundedIcon
          sx={{ fontSize: 50, marginLeft: -1.3, marginTop: -0.8 }}
        />
      </button>

      <div className="caroucel-pages">
        <div
          className="caroucel-page"
          style={{
            backgroundColor: "red",
            transform: `translateX(-${selectedPage * 100}%)`,
          }}
        >
          a
        </div>
        <div
          className="caroucel-page"
          style={{
            backgroundColor: "green",
            transform: `translateX(-${selectedPage * 100}%)`,
          }}
        >
          b
        </div>
        <div
          className="caroucel-page"
          style={{
            backgroundColor: "blue",
            transform: `translateX(-${selectedPage * 100}%)`,
          }}
        >
          c
        </div>
      </div>

      <button id="right" onClick={() => onClick(1)}>
        <ArrowRightRoundedIcon
          sx={{ fontSize: 50, marginLeft: -1.3, marginTop: -0.8 }}
        />
      </button>
    </div>
  );
}

export default Caroucel;
