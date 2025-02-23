import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";
import SocialMedia from "../components/SocialMedia";
import CardImg from "../components/CardImg";
import Footer from "../components/Footer";
import StickyButtons from "../components/StickyButtons";
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
      <main>
        <Caroucel height={"500px"} botao={"home"} />
        <div
          style={{
            backgroundImage: `url(${currentImage})`,
          }}
          className="thinking_image"
        ></div>
        <div className="row">
          <SocialMedia width={"600px"} />
        </div>
        <div id="about">
          <CardImg
            bg_color={"#FFFFFF"}
            text_color={"#000000"}
            order={"img-card"}
            src={require("../assets/duds mo quadrado.png")}
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
            order={"card-img"}
            src={require("../assets/eg.png")}
            alt={"logo do Eye Gloome"}
            title={"Eye Gloome"}
            content={
              "Graphic Novel onde um grupo de bandidos vive uma grande aventura, mas sem alinhar seus interesses, selam seus destinos um a um, com os olhos enevoados."
            }
          />
          <CardImg
            bg_color={"#FE7B01"}
            text_color={"#000000"}
            order={"img-card"}
            src={require("../assets/loja.png")}
            alt={"logo da loja"}
            title={"Loja"}
            content={
              "Aqui você encontra produtos criativos com uma pitada de bom humor. Desenhamos sobre cultura geek, pets, games e não dosamos no duplo sentido!"
            }
          />
          <CardImg
            bg_color={"#006CFF"}
            text_color={"#000000"}
            order={"card-img"}
            src={require("../assets/games.png")}
            alt={"imagem games"}
            title={"Nossos jogos"}
            content={
              "Nossa humilde carreira com game dev é documentada aqui. Seja você um deus nórdico, um universitário problemático ou um amante do jogo da velha."
            }
          />
          <CardImg
            bg_color={"#FFEA01"}
            text_color={"#000000"}
            order={"img-card"}
            src={require("../assets/art.png")}
            alt={"imagem artistas"}
            title={"Como artistas"}
            content={
              "Confira nossas obras dos mais variados estilos. Fechamos encomendas, preço a decidir."
            }
          />
          <CardImg
            bg_color={"#001f40"}
            text_color={"#ffffff"}
            order={"card-img"}
            src={require("../assets/dev.png")}
            alt={"imagem desenvolvedores"}
            title={"Como desenvolvedores"}
            content={
              "Este site é um exemplo do que podemos fazer! À procura de mais, confira aqui!"
            }
          />
          <CardImg
            bg_color={"#FE7B01"}
            text_color={"#000000"}
            order={"img-card"}
            src={require("../assets/gamers.png")}
            alt={"imagem gamers"}
            title={"Como gamers"}
            link={"https://www.youtube.com/channel/UCGYyPDQwVu0wZw6ApNvMPrw"}
            content={
              "No tempo livre, gostamos de jogar video-game, colecionando os melhores momentos em gameplays que você pode conferir clicando aqui!"
            }
          />
        </div>
      </main>
      <StickyButtons />
      <Footer />
    </div>
  );
}

export default Home;
