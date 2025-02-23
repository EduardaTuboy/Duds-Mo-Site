import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submetendo o formulário manualmente
    event.target.submit();
  };
  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert("bruh");
  };

  return (
    <div>
      <Navbar pagina={"register"} />
      <main className="main_register">
        <h2>Login</h2>
        <form action="/submit-login" method="POST">
          <input
            className="NB_border"
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu melhor email :)"
            required
          />
          <input
            className="NB_border"
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha (cuidado com os curiosos òó)"
            required
          />
          <input
            className="hover_NB_border"
            type="text"
            id="submit"
            value="Login"
            onClick={handleSubmit}
            style={{ cursor: "pointer" }}
          />
          <input
            className="hover_NB_border"
            type="text"
            id="forgot"
            value="Esqueceu a senha?"
            onClick={handleForgotPassword}
            style={{ cursor: "pointer" }}
          />
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Register;
