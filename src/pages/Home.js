import React from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";

function Home() {
  return (
    <div>
      <Navbar pagina={"home"} />
      <Caroucel />
    </div>
  );
}

export default Home;
