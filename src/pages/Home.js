import React from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";
import SocialMedia from "../components/SocialMedia";
import CardImg from "../components/CardImg";

function Home() {
  return (
    <div>
      <Navbar pagina={"home"} />
      <Caroucel />
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
            "Somos um casal de estudantes de ciência da computação e empreendedores, que atuam com mídias digitais, produtos autorais e desenvolvimento de software."
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
          content={"Um grupo de bandidos"}
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
