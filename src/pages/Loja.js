import React from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";
import CathegoryCard from "../components/CathegoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Loja() {
  return (
    <div>
      <Navbar pagina={"loja"} />

      <Caroucel height={"200px"} botao={"loja"} />
      <h2>Categorias</h2>
      <div id="categorias">
        <CathegoryCard />
      </div>

      <h2>Todos os nossos produtos</h2>
      <div id="produtos">
        <ProductCard />
      </div>

      <Footer />
    </div>
  );
}

export default Loja;
