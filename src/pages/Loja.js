import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Caroucel from "../components/Caroucel";
import CathegoryCard from "../components/CathegoryCard";
import ProductCard from "../components/ProductCard";
import StickyButtons from "../components/StickyButtons";
import Footer from "../components/Footer";
import products from "../products";
import cathegoryStickers from "../assets/1.png";
import cathegoryBottons from "../assets/2.png";
import cathegoryPrints from "../assets/3.png";
import cathegoryKeys from "../assets/4.png";

function Loja() {
  // Estado para controlar a categoria selecionada
  const [cathegory, setCathegory] = useState(null);

  // Função que é chamada quando uma categoria é clicada
  function handleClick(num) {
    if (num === 0) {
      setCathegory("adesivo");
    }
    if (num === 1) {
      setCathegory("print");
    }
    if (num === 2) {
      setCathegory("bottom");
    }
    if (num === 3) {
      setCathegory("chaveiro");
    }
    if (num === 4) {
      setCathegory("croche");
    }
    if (num === 5) {
      setCathegory(null);
    }
  }

  // Função que renderiza conteúdo com base na categoria selecionada
  const renderCategoria = () => {
    // Filtra os produtos pela categoria selecionada
    const filteredProducts = products.filter(
      (product) => product.cathegory === cathegory
    );

    // Caso a categoria seja definida, exibe os produtos filtrados
    if (cathegory) {
      return (
        <div id="produtos">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.key}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <h3>Não há produtos nesta categoria :/</h3>
          )}
        </div>
      );
    }

    // Se a categoria não estiver definida, mostra todos os produtos
    return (
      <div id="produtos">
        {products.map((product) => (
          <ProductCard
            key={product.key}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar pagina={"loja"} />
      <Caroucel height={"200px"} botao={"loja"} />
      <div className="espaco"></div>
      <h2>Categorias</h2>
      <div id="categorias">
        <CathegoryCard
          name="Adesivos"
          url={cathegoryStickers}
          onClick={() => handleClick(0)}
        />
        <CathegoryCard
          name="Prints"
          url={cathegoryPrints}
          onClick={() => handleClick(1)}
        />
        <CathegoryCard
          name="Bottons"
          url={cathegoryBottons}
          onClick={() => handleClick(2)}
        />
        <CathegoryCard
          name="Chaveiros"
          url={cathegoryStickers}
          onClick={() => handleClick(3)}
        />
        <CathegoryCard
          name="Crochê"
          url={cathegoryKeys}
          onClick={() => handleClick(4)}
        />
        <CathegoryCard
          name="Todos"
          url={cathegoryPrints}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className="espaco"></div>
      <h2>Todos os nossos produtos</h2>
      <div>{renderCategoria()}</div>

      <StickyButtons />
      <Footer />
    </div>
  );
}

export default Loja;
