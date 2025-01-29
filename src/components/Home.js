import React from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";
import SocialMedia from "../components/SocialMedia";

function Home() {
  return (
    <div>
      <Navbar pagina={"home"} />
      <Caroucel />
      <SocialMedia />
    </div>
  );
}

export default Home;
