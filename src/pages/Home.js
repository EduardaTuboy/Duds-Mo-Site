import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";
import SocialMedia from "../components/SocialMedia";
import CardImg from "../components/CardImg";
import dudsThinking from "../assets/duds_thinking.png";
import moThinking from "../assets/mo_thinking.png";

function Home() {
  const [currentImage, setCurrentImage] = useState(dudsThinking);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === dudsThinking ? moThinking : dudsThinking
      );
    }, 2000); // Alterna a cada 2000ms (2 segundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div>
      <Navbar pagina={"home"} />
      <Caroucel />
      <div
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
        className="thinking_image"
      ></div>
      <SocialMedia />
      <div id="about">
        <CardImg
          bg_color={"#FFFFFF"}
          text_color={"#000000"}
          ordem={"img-card"}
          src={require("../assets/logo.png")}
          alt={"logo"}
          title={"Quem somos?"}
          content={
            "Um casal de estudantes de ciência da computação e empreendedores, que atuam com mídias digitais, produtos autorais e desenvolvimento de software."
          }
        />
        <h2>Conheça nossos Projetos!</h2>
        <CardImg
          bg_color={"#001f40"}
          text_color={"#ffff00"}
          ordem={"card-img"}
          src={require("../assets/logo.png")}
          alt={"logo"}
          title={"Eye Gloome"}
          content={
            "Graphic Novel onde um grupo de bandidos vive uma grande aventura, mas sem alinhar seus interesses, selam seus destinos um a um, com os olhos enevoados"
          }
        />
        <CardImg
          bg_color={"#FFFFFF"}
          text_color={"#000000"}
          ordem={"img-card"}
          src={require("../assets/logo.png")}
          alt={"logo"}
          title={"Quem somos?"}
          content={
            "Somos um casal de estudantes de ciência da computação e empreendedores, que atuam com mídias digitais, produtos autorais e desenvolvimento de software."
          }
        />
      </div>
    </div>
  );
}

export default Home;
