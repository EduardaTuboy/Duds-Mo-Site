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
          ordem={"card-img"}
          src={require("../assets/logo.png")}
          alt={"logo"}
          title={"Quem somos?"}
          content={
            "Somos um casal de estudantes de ciência da computação e empreendedores, que atuam com mídias digitais, produtos autorais e desenvolvimento de software."
          }
        />
        <CardImg
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
